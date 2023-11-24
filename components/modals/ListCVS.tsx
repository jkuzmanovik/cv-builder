"use client";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import CVSingle from "../CVSingle";

const ListCVS = () => {
  const { userId } = useAuth();
  const [cvs, setCvs] = useState(null as any);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://0mfnypwgu3.execute-api.us-east-1.amazonaws.com/dev/get-user-cv/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setCvs(json.newCV.CVS);
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log(cvs);
  }, [cvs]);

  return (
    <>
    {cvs? (Object.keys(cvs).map((key : any) => (
       <CVSingle key={key} cv={cvs[key]} />
      )) )
    : (<h1>You dont have any CVs yet</h1>)
    }
    </>
  )
};

export default ListCVS;
