"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import useFormStore from "@/hooks/form-hook";

const RenderCV = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const form = useFormStore();

  useEffect(() => {
    console.log(htmlContent);
  }, [htmlContent]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://rs6x4t44bi.execute-api.us-east-1.amazonaws.com/dev/createResume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.json), // Replace 'form.json' with your form data
        }
      );

      if (response.ok) {
        const html = await response.text();
        setHtmlContent(html);
      } else {
        console.error("Failed to fetch HTML content");
      }
    } catch (error) {
      console.error("Error fetching HTML content:", error);
    }
  };

  const printDocument = () => {
    document.title = "My_CV";
    window.print();
  };

  return (
    <>
      <div>
        <Button
          onClick={printDocument}
          className="text-5xl flex mx-auto mt-4 p-4"
        >
          Print as PDF
        </Button>
        <Button
          onClick={handleSubmit}
          className="text-3xl flex mx-auto mt-4 p-2"
        >
          Submit and Generate CV
        </Button>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          id="cv-content"
        />
      </div>
    </>
  );
};

export default RenderCV;
