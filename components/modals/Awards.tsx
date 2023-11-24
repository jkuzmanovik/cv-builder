import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";
import { useState } from "react";
import Award from "../Award";

const Awards = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.awards ? formStore.json.awards.length : 1
  );
  const stepStore = useStepStore();
  const [awards, setAwards] = useState(
    formStore.json.awards
      ? [
        {
          title: formStore.json.awards[0].title,
          date: new Date(formStore.json.awards[0].date),
          awarder: formStore.json.awards[0].awarder,
          summary: formStore.json.awards[0].summary,
        }
      ]
      : [
          {
            title: "",
            date: new Date(),
            awarder: "",
            summary: "",
          },
        ]
  );
  const increment = () => {
    setCounter(counter + 1);
    setAwards([
      ...awards,
      {
        title: "",
        date: new Date(),
        awarder: "",
        summary: "",
      },
    ]);
  };
  const decrement = () => {
    setCounter(counter - 1);
    setAwards(awards.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("awards", awards);
    stepStore.increaseStep();
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Awards</h1>
        {awards.map((award: any, index: any) => (
          <Award key={index} id={index} award={award} setAwards={setAwards} />
        ))}
        <div className="flex justify-end gap-2">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={increment}> + Awards </Button>
          {counter > 1 && <Button onClick={decrement}> - Awards </Button>}
        </div>
      </div>
    </>
  );
};

export default Awards;
