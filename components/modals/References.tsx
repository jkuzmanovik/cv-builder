import useFormStore from "@/hooks/form-hook";
import Reference from "../Reference";
import useStepStore from "@/hooks/step-hook";
import { useState } from "react";
import { Button } from "../ui/button";

const References = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.references ? formStore.json.references.length : 1
  );
  const stepStore = useStepStore();
  const [references, setReferences] = useState(
    formStore.json.references
      ? formStore.json.references
      : [
          {
            name: "",
            reference: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setReferences([
      ...references,
      {
        name: "",
        reference: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setReferences(references.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("references", references);
    stepStore.increaseStep();
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">References</h1>
      {references.map((reference: any, index: any) => (
        <Reference
          key={index}
          id={index}
          reference={reference}
          setReferences={setReferences}
        />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Reference </Button>
        {counter > 1 && <Button onClick={decrement}> - Reference </Button>}
      </div>
    </>
  );
};

export default References;
