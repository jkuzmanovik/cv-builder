import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { useState } from "react";
import Education from "../Education";
import { Button } from "../ui/button";

const Educations = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.education ? formStore.json.education.length : 1
  );
  const stepStore = useStepStore();
  const [education, setEducation] = useState(
    formStore.json.education
      ? formStore.json.education
      : [
          {
            institution: "",
            website: "",
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
    setEducation([
      ...education,
      {
        institution: "",
        website: "",
        area: "",
        studyType: String,
        startDate: new Date(),
        endDate: new Date(),
        score: "",
        courses: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setEducation(education.slice(0, -1));
  };
  const handleNext = () => {
    formStore.addField("education", education);
    stepStore.increaseStep();
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Education</h1>
        {education.map((education: any, index: any) => (
          <Education
            key={index}
            id={index}
            education={education}
            setEducation={setEducation}
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
      </div>
    </>
  );
};

export default Educations;
