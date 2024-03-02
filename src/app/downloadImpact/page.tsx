import React from "react"
import DonationComponent from "./DonationComponent"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import Image from "next/image"

const page = ({
        params,
        searchParams,
      }: {
        params: { slug: string }
        searchParams?: { [key: string]: string | string[] | undefined }
      }) => {
        const companyName = searchParams?.name
        const amount = searchParams?.amount || 0
        var passName = ""
        
      
        if (companyName) {
          if (typeof companyName === "string"){
            passName = companyName
          }
        } 
        // make sure dollarRaised is a number
  if (amount === null) {
        throw new Error("dollarsRaised is null")
      }
      const dollarsRaised = parseFloat(amount)
    
      
        return (
          <div>
            this will be prettier next sprint
            <p> {companyName}</p>
            <p> {amount} </p>
            {/* <DonationComponent companyName={passName} dollarsRaised={dollarsRaised}/>       */}
          </div>
          
        )
      }
      export default page