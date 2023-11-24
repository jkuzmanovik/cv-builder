"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import useFormStore from "@/hooks/form-hook";
import { auth, useAuth } from "@clerk/nextjs";

const RenderCV = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const form = useFormStore();
  const { userId } = useAuth();

  useEffect(() => {
    console.log(htmlContent);
  }, [htmlContent]);

  const handleSubmit = async () => {
    try {
      if (userId) {
        const resposne2 = await fetch(
          `https://0mfnypwgu3.execute-api.us-east-1.amazonaws.com/dev/save-user-cv/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form.json), // Replace 'form.json' with your form data
          }
        );
        if(resposne2.ok){
          console.log("User CV saved")
        }
      }

      const response = await fetch(
        "https://0mfnypwgu3.execute-api.us-east-1.amazonaws.com/dev/createResume",
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
