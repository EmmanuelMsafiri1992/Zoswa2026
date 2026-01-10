/**
 * Setup Admin Script
 * Creates admin user if it doesn't exist
 * Run automatically during deployment
 */

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const ADMIN_EMAIL = 'zoswa.com@gmail.com'
const ADMIN_PASSWORD = 'Admin@2026'
const ADMIN_NAME = 'Admin'

async function setupAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zoswa')
    console.log('Connected to MongoDB')

    const usersCollection = mongoose.connection.db.collection('users')

    // Check if admin already exists
    const existingAdmin = await usersCollection.findOne({ email: ADMIN_EMAIL })

    if (existingAdmin) {
      // Update to admin role if not already
      if (existingAdmin.role !== 'admin') {
        await usersCollection.updateOne(
          { email: ADMIN_EMAIL },
          { $set: { role: 'admin', isSubscribed: true, isEmailVerified: true } }
        )
        console.log('Updated existing user to admin role')
      } else {
        console.log('Admin user already exists')
      }
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12)

      await usersCollection.insertOne({
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin',
        isActive: true,
        isEmailVerified: true,
        isSubscribed: true,
        loginAttempts: 0,
        trialStartDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      })

      console.log('Admin user created successfully!')
      console.log(`Email: ${ADMIN_EMAIL}`)
      console.log(`Password: ${ADMIN_PASSWORD}`)
    }

    await mongoose.disconnect()
    process.exit(0)
  } catch (error) {
    console.error('Error setting up admin:', error)
    process.exit(1)
  }
}

setupAdmin()
