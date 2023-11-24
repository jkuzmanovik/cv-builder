import useFormStore from "@/hooks/form-hook";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useStepStore from "@/hooks/step-hook";

interface CVSingleProps {
  cv: any;
}

const CVSingle: React.FC<CVSingleProps> = ({ cv }) => {
    const formStore = useFormStore();
    const stepStore = useStepStore()
    const handleEdit = () => {
        console.log("I am clicked")
        formStore.json = cv;
        stepStore.currentStep = 0;
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
