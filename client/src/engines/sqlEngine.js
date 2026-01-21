/**
 * SQL execution engine using sql.js (SQLite in WebAssembly)
 */

let db = null
let sqlJsLoading = null

/**
 * Load SQL.js runtime
 */
async function loadSqlJs() {
  if (db) return db

  if (sqlJsLoading) {
    return await sqlJsLoading
  }

  sqlJsLoading = (async () => {
    try {
      // Load SQL.js from CDN
      if (!window.initSqlJs) {
        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.9.0/sql-wasm.js'
        document.head.appendChild(script)

        await new Promise((resolve, reject) => {
          script.onload = resolve
          script.onerror = reject
        })
      }

      const SQL = await window.initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.9.0/${file}`
      })

      db = new SQL.Database()
      return db
    } catch (error) {
      sqlJsLoading = null
      throw error
    }
  })()

  return await sqlJsLoading
}

/**
 * Execute SQL queries
 */
export async function executeSQL(code) {
  try {
    const database = await loadSqlJs()

    // Split into individual statements
    const statements = code
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'))

    const results = []
    let output = ''

    for (const statement of statements) {
      try {
        // Check if it's a SELECT query
        const isSelect = statement.toUpperCase().trimStart().startsWith('SELECT')

        if (isSelect) {
          const result = database.exec(statement)
          if (result.length > 0) {
            results.push({
              columns: result[0].columns,
              values: result[0].values
            })
          } else {
            results.push({
              columns: [],
              values: []
            })
          }
        } else {
          // For non-SELECT queries, just run them
          database.run(statement)
          const changes = database.getRowsModified()
          output += `\x1b[32m✓\x1b[0m ${statement.split(' ')[0].toUpperCase()}: `
          output += changes > 0 ? `${changes} row(s) affected\n` : 'OK\n'
        }
      } catch (err) {
        results.push({ error: err.message })
        output += `\x1b[31m✗ Error:\x1b[0m ${err.message}\n`
      }
    }

    // If we have SELECT results, return them for table display
    if (results.some(r => r.columns)) {
      return {
        output: output || 'Query executed successfully',
        sqlResults: results,
        type: 'sql',
        error: false
      }
    }

    return {
      output: output || 'SQL executed successfully.\n',
      sqlResults: results,
      type: 'sql',
      error: results.some(r => r.error)
    }
  } catch (error) {
    return {
      output: `\x1b[31mSQL Error:\x1b[0m ${error.message}\n`,
      error: true,
      type: 'console'
    }
  }
}

/**
 * Get all tables in the database
 */
export async function getTables() {
  try {
    const database = await loadSqlJs()
    const result = database.exec("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")
    return result.length > 0 ? result[0].values.map(r => r[0]) : []
  } catch (error) {
    return []
  }
}

/**
 * Get table schema
 */
export async function getTableSchema(tableName) {
  try {
    const database = await loadSqlJs()
    const result = database.exec(`PRAGMA table_info(${tableName})`)
    if (result.length > 0) {
      return result[0].values.map(row => ({
        name: row[1],
        type: row[2],
        notNull: row[3] === 1,
        defaultValue: row[4],
        primaryKey: row[5] === 1
      }))
    }
    return []
  } catch (error) {
    return []
  }
}

/**
 * Reset the database
 */
export async function resetDatabase() {
  if (db) {
    db.close()
    db = null
  }
  sqlJsLoading = null
  return await loadSqlJs()
}

/**
 * Export database to SQL
 */
export async function exportToSQL() {
  try {
    const database = await loadSqlJs()
    const tables = await getTables()
    let sql = ''

    for (const table of tables) {
      // Get CREATE statement
      const createResult = database.exec(
        `SELECT sql FROM sqlite_master WHERE type='table' AND name='${table}'`
      )
      if (createResult.length > 0) {
        sql += createResult[0].values[0][0] + ';\n\n'
      }

      // Get INSERT statements
      const dataResult = database.exec(`SELECT * FROM ${table}`)
      if (dataResult.length > 0 && dataResult[0].values.length > 0) {
        const columns = dataResult[0].columns.join(', ')
        for (const row of dataResult[0].values) {
          const values = row.map(v =>
            v === null ? 'NULL' : typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v
          ).join(', ')
          sql += `INSERT INTO ${table} (${columns}) VALUES (${values});\n`
        }
        sql += '\n'
      }
    }

    return sql
  } catch (error) {
    return `-- Error exporting database: ${error.message}`
  }
}

export default executeSQL
