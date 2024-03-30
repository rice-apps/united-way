"use client"

import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import React, { useState } from "react"

export function Downloads() {
  const downloadRef = React.createRef<HTMLDivElement>()

  const handleDownloadPdf = async () => {
    setSharebool(true)
    const element = downloadRef.current
    const canvas = await html2canvas(element as HTMLElement)
    const data = canvas.toDataURL("image/png")

    const pdf = new jsPDF()
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("donation.pdf")
    setSharebool(false)
  }

  const handleDownloadImage = async () => {
    const element = downloadRef.current
    console.log(element)
    const canvas = await html2canvas(element as HTMLElement)

    const data = canvas.toDataURL("image/jpg")
    const link = document.createElement("a")

    if (typeof link.download === "string") {
      link.href = data
      link.download = "image.jpg"

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }
    setSharebool(false)
  }

  const [shareBool, setSharebool] = useState(false)

  return (
    <>
      <div className="hidden" ref={downloadRef}>
        hahahahahahahahhahahasdfhalskdfjhalskjjdfh blah blah this is the thing
        that downloads hopefully or something
      </div>
      <div className="flex w-full place-items-center justify-center my-2">
        <button
          className="btn btn-outline w-1/6 mr-2 rounded-full"
          onClick={handleDownloadPdf}
        >
          Save as PDF
        </button>
        <button className="btn btn-outline w-1/6 rounded-full" onClick={handleDownloadImage}>
          Save as JPG
        </button>
      </div>
    </>
  )
}
