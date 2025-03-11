import mongoose from 'mongoose' //npm install mongoose

// Export connectDB as a named export
export const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://kinuthialawrence343:XelCjNKhYojwZVpB@cluster0.akvymy0.mongodb.net/missing-persons'
    
    if (mongoose.connection.readyState === 1) {
      console.log('🟢 Already connected to MongoDB')
      return mongoose.connection
    }

    const connection = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })

    console.log('🟢 MongoDB Connected Successfully')
    return connection
  } catch (error) {
    console.error('🔴 MongoDB connection error:', error)
    throw error
  }
}

// Keep the default export for Nitro
export default defineNitroPlugin(async () => {
  await connectDB()
})