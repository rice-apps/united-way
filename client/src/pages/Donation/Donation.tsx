import { useLocation } from "react-router-dom";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/**
 * 
 * 
 */


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

  var label = "Here's what your donation"
  if (data.companyName) {
    label = `Here's what the ${data.companyName} United Way campaign`
  }

  return (
    <>
      <div>
        <div className="flex flex-col justify-center align-middle w-full">
          <div className="flex align-baseline w-full">
            <div className="flex flex-col mx-auto mb-5">
              <a className="text-xl font-semibold text-center">
                {label}{" "}
              </a>
              <a className="text-lg font-semibold text-center">
                made possible last year
              </a>
              <a className="text-xl  text-center">
                Based on campaign results of{" "}
                <span className="font-bold text-2xl">
                  ${data.dollarsRaised}
                </span>
              </a>
            </div>
          </div>
          {/* <a className=" normal-case text-m mx-auto">Donation Page</a> */}
          <div className="mt-2" ref={downloadRef}>
            <ImpactCarousel
              dollarsRaised={data.dollarsRaised}
              stability={data.stability}
              development={data.development}
              healthcare={data.healthcare}
              escape={data.escape}
              basicNeeds={data.basicNeeds}
              totalPeople={data.totalPeople}
            />
          <div className="flex w-full place-items-center justify-center">
              <button
                className="btn btn-outline w-1/6"
                onClick={handleDownloadPdf}
              >
                Save as PDF
              </button>
              <button
                className="btn btn-outline w-1/6"
                onClick={handleDownloadImage}
              >
                Save as JPG
              </button>
            </div>
                      </div>


          
        </div>
      </div>
    </>
  );
}

export default Donation;
