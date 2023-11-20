"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useStepStore from "@/hooks/step-hook";
import Work from "@/components/Work";
import useFormStore from "@/hooks/form-hook";
import { useState } from "react";

const Works = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.works ? formStore.json.works.length : 1
  );
  const stepStore = useStepStore();
  const [works, setWorks] = useState(
    formStore.json.works
      ? formStore.json.works
      : [
          {
            name: "",
            location: "",
            description: "",
            position: "",
            url: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""],
            keywords: [""],
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setWorks([
      ...works,
      {
        name: "",
        location: "",
        description: "",
        position: "",
        url: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: "",
        keywords: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setWorks(works.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("works", works);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Work</h1>
      {works.map((work: any, index: any) => (
        <Work key={index} id={index} work={work} setWorks={setWorks} />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> +Works </Button>
        {counter > 1 && <Button onClick={decrement}> -Profile </Button>}
      </div>
    </>
  );
};

export default Works;
