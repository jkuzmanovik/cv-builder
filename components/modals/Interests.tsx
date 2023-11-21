import useFormStore from "@/hooks/form-hook"
import Interest from "../Interest";
import { useState } from "react";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";

const Interests = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.interests ? formStore.json.interests.length : 1
  )
  const stepStore = useStepStore();

  const [interests, setInterests] = useState(
    formStore.json.interests
    ? formStore.json.interests
    : [
      {
        name: "",
        keywords: "",
      }
    ]
  )

  const increment = () => {
    setCounter(counter + 1);
    setInterests([
      ...interests,
      {
        name: "",
        keywords: "",
      }
    ])
  }

  const decrement = () => {
    setCounter(counter - 1);
    setInterests(interests.slice(0, -1));
  }

  const handleNext = () => {
    formStore.addField("interests", interests);
    stepStore.increaseStep();
  }

  const handleBack = () => {
    stepStore.decreaseStep();
  }


  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Interests</h1>
      {interests.map((interest:any, index:any) => (
        <Interest
          key={index}
          id={index}
          interest={interest}
          setInterests={setInterests}
        />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Interest </Button>
        {counter > 1 && <Button onClick={decrement}> - Interest </Button>}
      </div>
    </>
  )


}

export default Interests