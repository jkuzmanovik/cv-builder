"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

const CoverLetter = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  useEffect(() => {
    console.log(formStore.json);
  }, [formStore.json]);

  return (
    <>
    <Button onClick={() => stepStore.decreaseStep()} className="text-4xl m-5">Go back</Button>
      <RenderCV />
    </>
  );
};

export default CoverLetter;
