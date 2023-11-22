"use client";

import { Button } from "@/components/ui/button";
import useStepStore from "@/hooks/step-hook";
import Work from "@/components/Work";
import useFormStore from "@/hooks/form-hook";
import { useState } from "react";

const Works = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.work ? formStore.json.work.length : 1
  );
  const stepStore = useStepStore();
  const [work, setWork] = useState(
    formStore.json.work
      ? formStore.json.work
      : [
          {
            name: "",
            position: "",
            website: "",
            startDate: new Date(),
            endDate: new Date(),
            summary: "",
            highlights: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setWork([
      ...work,
      {
        name: "",
        position: "",
        website: "",
        startDate: new Date(),
        endDate: new Date(),
        summary: "",
        highlights: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setWork(work.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("work", work);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Work</h1>
      {work.map((work: any, index: any) => (
        <Work key={index} id={index} work={work} setWork={setWork} />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Works </Button>
        {counter > 1 && <Button onClick={decrement}> - Works </Button>}
      </div>
    </>
  );
};

export default Works;
