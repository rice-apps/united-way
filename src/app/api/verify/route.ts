import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function POST(req: Request) {
  //  get the user pin
  const userPin = (await req.json()).pin
  // get the password from the env file
  const actualPin = process.env.PRIVATE_KEY

  // compare the
  if (actualPin === userPin) {
    return NextResponse.json({ response: 'Correct Pin' }, { status: 200 })
  } else {
    return NextResponse.json({ response: 'Incorrect Pin' }, { status: 200 })
  }
}
