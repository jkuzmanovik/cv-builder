import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";
import { useState } from "react";
import Publication from "../Publication";

const Publications = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.publications ? formStore.json.publications.length : 1
  );
  const stepStore = useStepStore();

  const [publications, setPublications] = useState(
    formStore.json.publications
      ? formStore.json.publications
      : [
          {
            name: "",
            publisher: "",
            releaseDate: new Date(),
            website: "",
            summary: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setPublications([
      ...publications,
      {
        name: "",
        publisher: "",
        releaseDate: new Date(),
        website: "",
        summary: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setPublications(publications.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("publications", publications);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Publications</h1>
        {publications.map((publication: any, index: any) => (
          <Publication
            key={index}
            id={index}
            publication={publication}
            setPublications={setPublications}
          />
        ))}
        <div className="flex justify-end gap-2">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={increment}> + Publication </Button>
          {counter > 1 && <Button onClick={decrement}> - Publication </Button>}
        </div>
      </div>
    </>
  );
};

export default Publications;
