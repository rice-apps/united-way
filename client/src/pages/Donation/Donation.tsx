// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);

import Demo from "../../components/ImpactCarousel/ImpactCarousel";
import Home2 from "../Home2/Home2";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import React from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

//“dollarsRaised”, “stability”, “development”, “healthcare”, “escape”, “basicNeeds”, “totalPeople”, "companyName"

let dollarRaised = 0;
let companyName = "TempComp";

function Donation() {
    const goHome = () => {
        window.location.href = "/";
    };

    const downloadRef = React.createRef<HTMLDivElement>();

    const handleDownloadPdf = async () => {
            const element = downloadRef.current;
            const canvas = await html2canvas(element as HTMLElement);
            const data = canvas.toDataURL('image/png');
        
            const pdf = new jsPDF();
            const imgProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
                (imgProperties.height * pdfWidth) / imgProperties.width;
        
            pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('donation.pdf');
    };

    const handleDownloadImage = async () => {
            const element = downloadRef.current;
            const canvas = await html2canvas(element as HTMLElement);
    
            const data = canvas.toDataURL('image/jpg');
            const link = document.createElement('a');
    
            if (typeof link.download === 'string') {
                link.href = data;
                link.download = 'image.jpg';
        
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(data);
            }
    }

    const style = {marginTop: 30, marginBottom: 30}

    return (
        <>
            <a className=" normal-case text-m">Donation Page</a>
            <div></div>
            <button className="btn" onClick={goHome}>
                GO HOME
            </button>
            <div></div>

            <div>
                Here's what the {companyName} United Way campaign* made possible last
                year:
            </div>
            <div>*based on campaign results of ${dollarRaised}</div>
            <div>
                <Demo />
            </div>
            {/* <div>
                [carousel would go here]
                <Home2 />
            </div> */}

            <button type="button" className="btn" onClick={handleDownloadPdf}>
                            Download as PDF
            </button>
            <div style={style}>
                    <button type="button" className="btn" onClick={handleDownloadImage}>
                            Download as JPG
                    </button>
            </div>
            <div>Proof of donation:</div>
            <div ref={downloadRef}>
            <div>Thank you for donating!</div>
                    <img src={"src/assets/United-Way-Logo.png"}></img>
                    <div>This text will be slightly cut off for some reason :/</div>
            </div>
        </>
    );
}

export default Donation;
