'use client'
import ImpactCarousel from './ImpactCarousel'
import { useEffect, useState } from 'react'
import { Downloads } from './Downloads'

type DonationInputs = {
  companyName: string | null
  dollarsRaised: number
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
  const [proportionsMap, setProportionsMap] = useState(null)

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
      </div>
      <Downloads />
    </>
  )
}

export default Donation
