import useFormStore from "@/hooks/form-hook";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useStepStore from "@/hooks/step-hook";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@clerk/nextjs";

interface CVSingleProps {
  cv: any;
}

const CVSingle: React.FC<CVSingleProps> = ({ cv }) => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  const { userId } = useAuth();
  const handleEdit = () => {
    console.log("i am clicked");
    formStore.json = cv;
    stepStore.currentStep = 0;
    console.log(formStore.json);
  };

  const handleDelete = async () => {
    await fetch(`https://0mfnypwgu3.execute-api.us-east-1.amazonaws.com/dev/delete-user-cv/${userId}/${cv.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };

  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Label</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium"> {cv.basics?.name} </TableCell>
              <TableCell>{cv.basics?.phone}</TableCell>
              <TableCell>{cv.basics?.email}</TableCell>
              <TableCell className="text-right">{cv.basics?.label}</TableCell>
              <TableCell className="text-right flex justify-center items-center gap-3 mt-4">
                <Link href={"/build"}>
                  <Button onClick={handleEdit}>Edit</Button>
                </Link>
                <Button onClick={handleDelete}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CVSingle;
