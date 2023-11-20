import useFormStore from "@/hooks/form-hook"
import useStepStore from "@/hooks/step-hook";
import { useState } from "react";
import Skill from "../Skill";
import { Button } from "../ui/button";

const Skills = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.skills ? formStore.json.skills.length : 1
  )
  const stepStore = useStepStore();

  const [skills, setSkills] = useState(
    formStore.json.skills
    ? formStore.json.skills
    : [
      {
        name: "",
        level: "",
        keywords: "",
      }
    ]
  )


  const increment = () => {
    setCounter(counter + 1);
    setSkills([
      ...skills,
      {
        name: "",
        level: "",
        keywords: "",
      }
    ])
  }

  const decrement = () => {
    setCounter(counter - 1);
    setSkills(skills.slice(0, -1));
  }

  const handleNext = () => {
    formStore.addField("skills", skills);
    stepStore.increaseStep();
  }

  const handleBack = () => {
    stepStore.decreaseStep();
  }

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Volunteers</h1>
      {skills.map((skill:any, index:any) => (
        <Skill
          key={index}
          id={index}
          skill={skill}
          setSkills={setSkills}
          />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> +Volunteer </Button>
        {counter > 1 && <Button onClick={decrement}> -Volunteer </Button>}
      </div>
    </>
  )
}

export default Skills