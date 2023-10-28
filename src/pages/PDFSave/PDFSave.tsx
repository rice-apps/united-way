import React from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function PDFSave() {
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
        };

        const style = {marginTop: 30, marginBottom: 30}
                            
        return (
          <>
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
      
      export default PDFSave;