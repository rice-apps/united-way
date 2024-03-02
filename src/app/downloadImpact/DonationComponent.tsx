// for next time -- build the component to be downloaded here
"use client"
import {  useState } from "react"
import type { ProportionsMap } from "../utils"

type DonationInputs = {
        companyName: string | null
        dollarsRaised: number
}      

function DonationComponent({ companyName, dollarsRaised }: DonationInputs) {
        // Import the proportions from the route.ts => how to
        async function GetData() {
          let data = await fetch(`/api/data/`)
          console.log(data)
          let data_json = await data.json()
          console.log(data_json)
          setProportionsMap(data_json)
        }
      
        // get the proportions
        const [proportionsMap, setProportionsMap] = useState<null | ProportionsMap>(null)
      
        return (
          <>
            <div className="mt-2">
              {proportionsMap != null ? (
                <p>
                  dollarsRaised={dollarsRaised}
                  stability={proportionsMap.stability}
                  development={proportionsMap.development}
                  healthcare={proportionsMap.healthcare}
                  escape={proportionsMap.escape}
                  basicNeeds={proportionsMap.basicNeeds}
                  totalPeople={proportionsMap.totalPeople}
                  </p>
              ) : (
                <span>Loading...</span>
              )}
              <button
              className="btn btn-outline w-1/6 mr-2"
        //       onClick={() => downloadImpact(companyName, dollarsRaised)}
            >
              Download as PDF
            </button>
            <button
              className="btn btn-outline w-1/6 mr-2"
        //       onClick={() => downloadImpact(companyName, dollarsRaised)}
            >
              Download as PNG
            </button>
            </div>
          </>
        )
      }
export default DonationComponent
