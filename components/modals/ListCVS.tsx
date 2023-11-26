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
    <div className="mx-auto m-2">
        <h1 className="m-auto text-2xl p-2  ">List of all your CVS</h1>
    {cvs? (Object.keys(cvs).map((key : any) => (
       <CVSingle key={key} cv={cvs[key]} />
      )) )
    : (<h1 className="flex justify-center mt-4">You dont have any CVs yet</h1>)
    }
    </div>
    </>
  )
};

export default ListCVS;
