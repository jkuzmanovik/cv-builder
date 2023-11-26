"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import useFormStore from "@/hooks/form-hook";
import { auth, useAuth } from "@clerk/nextjs";
import { set } from "date-fns";

const RenderCV = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isOk, setIsOk] = useState(false);
  const form = useFormStore();
  const { userId } = useAuth();

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
            body: JSON.stringify(form.json),
          }
        );
        if (resposne2.ok) {
          console.log("User CV saved");
        }
      }

      const response = await fetch(
        "https://0mfnypwgu3.execute-api.us-east-1.amazonaws.com/dev/createResume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.json),
        }
      );

      if (response.ok) {
        const html = await response.text();
        setHtmlContent(html);
        setIsOk(true);
      } else {
        console.error("Failed to fetch HTML content");
      }
    } catch (error) {
      setIsOk(false);
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
        {isOk ? (
          <Button
            onClick={printDocument}
            className="text-5xl flex mx-auto mt-4 p-4"
          >
            Download as PDF
          </Button>
        ) : null}
        {!isOk ? (
          <Button
            onClick={handleSubmit}
            className="text-3xl flex mx-auto mt-4 p-2"
          >
            Save and Generate CV
          </Button>
        ) : null}

        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          id="cv-content"
        />
      </div>
    </>
  );
};

export default RenderCV;
