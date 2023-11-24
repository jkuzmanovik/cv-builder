import useFormStore from "@/hooks/form-hook";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CVSingleProps {
  cv: any;
}

const CVSingle: React.FC<CVSingleProps> = ({ cv }) => {
    const formStore = useFormStore();
    const handleEdit = () => {
        console.log("I am clicked")
        formStore.json = cv;
        console.log(formStore.json)
    }


  return (
    <>
    <div className="flex justify-center">
        <h1>{cv.basics?.label}</h1>
        <Link href={'/build'}>
            <Button onClick={handleEdit}>Edit</Button>
        </Link>
    </div>
    </>
  )
};

export default CVSingle;
