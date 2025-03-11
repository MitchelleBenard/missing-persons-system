import { defineEventHandler, readBody } from 'h3'
import Report from '../models/Report'
import { connectDB } from '../db'

export default defineEventHandler(async (event) => {
  await connectDB()
  
  try {
    const body = await readBody(event)
    const report = await Report.create(body)
    
    return {
      success: true,
      data: report
    }
  } catch (error) {
    return {
      success: false,
      error: (error as any).message
    }
  }
})