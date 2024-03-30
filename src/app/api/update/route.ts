import { Proportions } from "@/app/types"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const j = await req.json()
  console.log(j)

  //  get the user pin
  const userPin = j.pin
  // get the password from the env file
  const actualPin = process.env.PRIVATE_KEY
  const token = process.env.GITHUB_TOKEN

  // check if the pin is null
  if (userPin === null) {
    return NextResponse.json({ response: "No Pin" }, { status: 400 })
  }

  console.log("pin success")

  if (token === null) {
    return NextResponse.json({ response: "No Token" }, { status: 500 })
  }

  console.log("token success")

  // compare the
  if (actualPin !== userPin) {
    return NextResponse.json({ response: "Incorrect Pin" }, { status: 200 })
  }

  console.log("pin correct")

  //  get the new data
  const json: Proportions = j.data

  // check that all the data can be converted to numbers
  if (
    isNaN(json.stability) ||
    isNaN(json.development) ||
    isNaN(json.healthcare) ||
    isNaN(json.escape) ||
    isNaN(json.basicNeeds) ||
    isNaN(json.totalPeople)
  ) {
    return NextResponse.json(
      { response: "Invalid data, must be a number" },
      { status: 200 }
    )
  } else {
    json.stability = Number(json.stability)
    json.development = Number(json.development)
    json.healthcare = Number(json.healthcare)
    json.escape = Number(json.escape)
    json.basicNeeds = Number(json.basicNeeds)
    json.totalPeople = Number(json.totalPeople)
  }

  console.log("data success")

  // check that the data is valid, all numbers between 0 and 1
  if (
    json.stability < 0 ||
    json.stability > 1 ||
    json.development < 0 ||
    json.development > 1 ||
    json.healthcare < 0 ||
    json.healthcare > 1 ||
    json.escape < 0 ||
    json.escape > 1 ||
    json.basicNeeds < 0 ||
    json.basicNeeds > 1
  ) {
    return NextResponse.json(
      { response: "Invalid data, must be between 0 and 1" },
      { status: 200 }
    )
  }

  console.log("data valid")

  const content = Buffer.from(JSON.stringify(json)).toString("base64")

  console.log("content success")

  // get the sha of the file
  const responseSha = await fetch(
    "https://api.github.com/repos/rice-apps/united-way/contents/public/data.json",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  if (!responseSha.ok) {
    console.log("error")
    console.log(responseSha)
    return NextResponse.error()
  }

  const sha = (await responseSha.json()).sha

  console.log("sha success: " + sha)


  // send a commit to github
  const response = await fetch(
    "https://api.github.com/repos/rice-apps/united-way/contents/public/data.json",
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message: "Update proportions",
        committer: {
          name: "United Way RiceApps",
          email: "united-way-bot",
        },
        sha: sha,
        content: content,
      }),
    }
  )

  if (!response.ok) {
    console.log("error")
    console.log(response)
    return NextResponse.error()
  } else {
    console.log("response success")
    console.log(response)
    return NextResponse.json(
      { response: "Updated proportions" },
      { status: 200 }
    )
  }
}
