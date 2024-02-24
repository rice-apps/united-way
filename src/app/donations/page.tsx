"use client";

import { jsPDF } from "jspdf";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import Image from "next/image";
import ImpactCarousel from "./ImpactCarousel";
import React, { useState } from "react";

function Donation() {
  const searchParams = useSearchParams();
  const companyName = searchParams.get("name");
  const amount = searchParams.get("amount");

  // make sure dollarRaised is a number
  if (amount === null) {
    throw new Error("dollarsRaised is null");
  }
  const dollarsRaised = parseFloat(amount);

  // dummy proportions
  const proportionsMap: { [key: string]: number } = {
    stability: 0.3,
    development: 0.5,
    healthcare: 0.2,
    escape: 0.1,
    basicNeeds: 0.1,
    totalPeople: 0.4,
  };

  const downloadRef = React.createRef<HTMLDivElement>();

  const handleDownloadPdf = async () => {
    setSharebool(true);
    const element = downloadRef.current;
    const canvas = await html2canvas(element as HTMLElement);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("donation.pdf");
    setSharebool(false);
  };

  const handleDownloadImage = async () => {
    const element = downloadRef.current;
    console.log(element);
    const canvas = await html2canvas(element as HTMLElement);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
    setSharebool(false);
  };

  const [shareBool, setSharebool] = useState(false);

  var label = "Here's what your donation";
  if (companyName) {
    label = `Here's what the ${companyName} United Way campaign`;
  }

  return (
    <>
      <div className="flex w-full justify-center flex-col mx-auto mb-5">
        <a className="text-xl font-semibold text-center">{label}</a>
        <a className="text-lg font-semibold text-center">
          made possible last year
        </a>
        <a className="text-xl  text-center">
          Based on campaign results of{" "}
          <span className="font-bold text-2xl">${dollarsRaised}</span>
        </a>
      </div>
      <div className="mt-2" ref={downloadRef}>
        <ImpactCarousel
          dollarsRaised={dollarsRaised}
          stability={proportionsMap.stability}
          development={proportionsMap.development}
          healthcare={proportionsMap.healthcare}
          escape={proportionsMap.escape}
          basicNeeds={proportionsMap.basicNeeds}
          totalPeople={proportionsMap.totalPeople}
        />
      </div>

      <div className="flex w-full place-items-center justify-center my-2">
        <button
          className="btn btn-outline w-1/6 mr-2"
          onClick={handleDownloadPdf}
        >
          Save as PDF
        </button>
        <button className="btn btn-outline w-1/6" onClick={handleDownloadImage}>
          Save as JPG
        </button>
      </div>
    </>
  );
}

export default Donation;
