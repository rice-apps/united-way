import React from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function PDFSave() {
        const printRef = React.createRef<HTMLDivElement>();

        const handleDownloadPdf = async () => {
                const element = printRef.current;
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
            
        return (
          <>
                <button type="button" className="btn" onClick={handleDownloadPdf}>
                        Download as PDF
                </button>
                <div>Proof of donation:</div>
                <div ref={printRef}>
                <div>Thank you for donating!</div>
                        <img src={"src/assets/United-Way-Logo.png"}></img>
                        <div>This text will be slightly cut off for some reason :/</div>
                </div>
          </>
        );
      }
      
      export default PDFSave;