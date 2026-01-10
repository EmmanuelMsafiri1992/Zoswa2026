import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zoswa')
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    return true
  } catch (error) {
    console.error(`⚠️ MongoDB not available: ${error.message}`)
    console.log(`🔄 Running in DEMO MODE - data will not persist`)
    console.log(`💡 To enable full features, start MongoDB or use MongoDB Atlas`)
    return false
  }
}

export default connectDB
