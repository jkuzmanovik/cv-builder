"use client";

import * as z from "zod";
import { v4 as uuidv4 } from "uuid";
import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import BuildModal from "./BuildModal";
import RenderCV from "../RenderCV";

const formSchema = z.object({
  coverLetter: z.string().min(3).max(1000),
});

const Render = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  useEffect(() => {
    if (!formStore.json.id) {
      formStore.addField("id", uuidv4());
    }
    console.log(formStore.json);
  }, [formStore]);

  return (
    <>
      <div>
        <Button
          onClick={() => stepStore.decreaseStep()}
          className="text-2xl m-5 flex justify-center"
        >
          Go back
        </Button>
        <RenderCV />
      </div>
    </>
  );
};

export default Render;
