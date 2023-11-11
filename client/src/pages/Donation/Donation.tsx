// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);

// import Demo from "../../components/ImpactCarousel/ImpactCarousel";
import { useLocation } from "react-router-dom";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Donation() {
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

  const location = useLocation();
  const [shareBool, setSharebool] = useState(false);

  // console.log(location.state.data);
  const data = location.state.data;

  return (
    <>
      <div>
        <div className="flex flex-col justify-center align-middle w-full">
          {/* <a className=" normal-case text-m mx-auto">Donation Page</a> */}
          <div className="flex flex-col mx-auto mb-5">
            <a className="text-xl font-semibold text-center">
              Here's what the {data.companyName} United Way campaign{" "}
            </a>
            <a className="text-lg font-semibold text-center">
              made possible last year
            </a>
            <a className="text-xl  text-center">
              Based on campaign results of{" "}
              <span className="font-bold text-2xl">${data.dollarsRaised}</span>
            </a>
          </div>
          <div className="mb-5">
            <ImpactCarousel
              dollarsRaised={data.dollarsRaised}
              stability={data.stability}
              development={data.development}
              healthcare={data.healthcare}
              escape={data.escape}
              basicNeeds={data.basicNeeds}
              totalPeople={data.totalPeople}
            />
          </div>
          <div className="flex flex-row w-full justify-between align-middle">
            <button
              className="btn btn-primary w-1/6"
              onClick={handleDownloadPdf}
            >
              Download as PDF
            </button>
            <button
              className="btn btn-primary w-1/6 mx-auto"
              onClick={handleDownloadImage}
            >
              Download as JPG
            </button>
          </div>
          <div
            ref={downloadRef}
            className="bg-slate-600 flex flex-row justify-center align-middle mt-96"
          >
            <img className="w-1/2" src={"src/assets/United-Way-Logo.png"}></img>
            <div className="flex flex-col mt-32 ml-5 w-3/4">
              <p>Dollars Raised = {data.dollarsRaised}</p>
              <p>Stability = {data.stability}</p>
              <p>Development = {data.development}</p>
              <p>Healthcare = {data.healthcare}</p>
              <p>Escape = {data.escape}</p>
              <p>Basic Needs = {data.basicNeeds}</p>
              <p>
                {"  total people   "}
                {data.totalPeople}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
