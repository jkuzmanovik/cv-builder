"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const RenderCV = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch(
      "https://y3venvn9v6.execute-api.us-east-1.amazonaws.com/dev/get-user/1234"
    )
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // This is where you can do something with the HTML content
    console.log(htmlContent);
  }, [htmlContent]);

  const printDocument = () => {
    document.title = "My_CV";
    window.print();
  }
  
  


  return (
    <>
    <div>
      <Button onClick={printDocument} className="text-5xl flex  mx-auto mt-4 p-4">Print as PDF</Button>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} id="cv-content"/>
    </div>
    </>
  );
};

export default RenderCV;
