import { NextResponse } from 'next/server'
import * as data from '../../../../public/data.json'

export async function GET(request: Request) {
  return NextResponse.json(data, { status: 200 })
}

// { "dollarsRaised": 500000,
//   "stability": 75,
//   "development": 95,
//   "healthcare": 85,
//   "escape": 60,
//   "basicNeeds": 98,
//   "totalPeople": 10000 }
