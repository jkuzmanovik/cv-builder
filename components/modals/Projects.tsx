import useFormStore from "@/hooks/form-hook";
import Project from "../Project";
import { useState } from "react";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";

const Projects = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.projects ? formStore.json.projects.length : 1
  );

  const stepStore = useStepStore();

  const [projects, setProjects] = useState(
    formStore.json.projects
      ? formStore.json.projects
      : [
          {
            name: "",
            description: "",
            highlights: "",
            keywords: "",
            startDate: new Date(),
            endDate: new Date(),
            url: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setProjects([
      ...projects,
      {
        name: "",
        description: "",
        highlights: "",
        keywords: "",
        startDate: new Date(),
        endDate: new Date(),
        url: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setProjects(projects.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("projects", projects);
    stepStore.increaseStep();
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Projects</h1>
      {projects.map((project: any, index: any) => (
        <Project
          key={index}
          id={index}
          project={project}
          setProjects={setProjects}
        />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Project </Button>
        {counter > 1 && <Button onClick={decrement}> - Project </Button>}
      </div>
    </>
  );
};

export default Projects;
