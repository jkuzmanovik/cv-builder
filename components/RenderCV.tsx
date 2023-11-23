"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";

const Html2Pdf = dynamic(() => import("html2pdf.js"), { ssr: false });

const RenderCV = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Replace this with your API endpoint to fetch the HTML page
    fetch(
      "https://y3venvn9v6.execute-api.us-east-1.amazonaws.com/dev/get-user/1234"
    )
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error(error));
  }, []);

  const downloadPdf = () => {
    import('html2pdf.js')
      .then(html2pdf => {
        const element = document.createElement('div');
        element.innerHTML = htmlContent;
        html2pdf.default().from(element).save('downloaded-cv.pdf');
      })
      .catch(error => console.error('Failed to load html2pdf.js', error));
  }

  useEffect(() => {
    // This is where you can do something with the HTML content
    console.log(htmlContent);
  }, [htmlContent]);

  return (
    <>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <br />
    <Button onClick={downloadPdf}>Show button</Button>
    </>
  );
};

export default RenderCV;
