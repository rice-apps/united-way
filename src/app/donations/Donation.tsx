"use client"
import ImpactCarousel from "./ImpactCarousel"
import { useEffect, useState } from "react"
import { Downloads } from "./Downloads"
import type { ProportionsMap } from "../utils"

type DonationInputs = {
  companyName: string | null
  dollarsRaised: number
}

function downloadImpact(companyName: string | null, proportionsMap: ProportionsMap) {
  window.location.href = `/downloadImpact?name=${companyName}&info=${proportionsMap}`
}


function Donation({ companyName, dollarsRaised }: DonationInputs) {
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

  useEffect(() => {
    GetData()
  }, [])

  return (
    <>
      <div className="mt-2">
        {proportionsMap != null ? (
          <ImpactCarousel
            dollarsRaised={dollarsRaised}
            stability={proportionsMap.stability}
            development={proportionsMap.development}
            healthcare={proportionsMap.healthcare}
            escape={proportionsMap.escape}
            basicNeeds={proportionsMap.basicNeeds}
            totalPeople={proportionsMap.totalPeople}
          />
        ) : (
          <span>Loading...</span>
        )}
        {proportionsMap != null ? (
          // next time - figure out how to pass proportionsMap
        <button
        className="btn btn-outline w-1/6 mr-2"
        onClick={() => downloadImpact(companyName, proportionsMap)}
      >
        Download your Impact
      </button>        ) : (
          <span></span>
        )}

      </div>
    </>
  )
}

export default Donation
