import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { useState } from "react";
import Education from "../Education";
import { Button } from "../ui/button";

const Educations = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.educations ? formStore.json.educations.length : 1
  );
  const stepStore = useStepStore();
  const [educations, setEducations] = useState(
    formStore.json.educations
      ? formStore.json.educations
      : [
          {
            institution: "",
            url: "",
            area: "",
            studyType: String,
            startDate: new Date(),
            endDate: new Date(),
            score: "",
            courses: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setEducations([
      ...educations,
      {
        institution: "",
        url: "",
        area: "",
        studyType: String,
        startDate: new Date(),
        endDate: new Date(),
        score: "",
        courses: "",
      },
    ]);
  }

  const decrement = () => {
    setCounter(counter - 1);
    setEducations(educations.slice(0, -1));
  }
  const handleNext = () => {
    formStore.addField("educations", educations);
    stepStore.increaseStep();
  }

  const handleBack = () => {
    stepStore.decreaseStep();
  }

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Education</h1>
      {educations.map((education:any, index:any) => (
        <Education
          key={index}
          id={index}
          education={education}
          setEducations={setEducations}
          />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Education </Button>
        {counter > 1 && <Button onClick={decrement}> - Education </Button>}
      </div>
    </>
  );
};

export default Educations;
