import { defineEventHandler } from 'h3'
import { connectDB } from '../db'

export default defineEventHandler(async (event) => {
  try {
    await connectDB()
    
    return {
      success: true,
      message: 'Welcome to the Missing Persons Reporting System API'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Service temporarily unavailable',
      error: (error as any).message
    }
  }
})