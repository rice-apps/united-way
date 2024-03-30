import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // the json format:
  return NextResponse.json(
    {
      stability: 0.3,
      development: 0.5,
      healthcare: 0.2,
      escape: 0.1,
      basicNeeds: 0.1,
      totalPeople: 0.4,
    },
    { status: 200 },
  )
}

// { "dollarsRaised": 500000,
//   "stability": 75,
//   "development": 95,
//   "healthcare": 85,
//   "escape": 60,
//   "basicNeeds": 98,
//   "totalPeople": 10000 }
