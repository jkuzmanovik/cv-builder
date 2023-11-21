import useFormStore from "@/hooks/form-hook";
import { useState } from "react";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";
import Volunteer from "../Volunteer";
const Volunteers = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.volunteers ? formStore.json.volunteers.length : 1
  );
  const stepStore = useStepStore();
  const [volunteers, setVolunteers] = useState(
    formStore.json.volunteers
      ? formStore.json.volunteers
      : [
          {
            organization: "",
            position: "",
            url: "",
            startDate: new Date(),
            endDate: new Date(),
            summary: "",
            highlights: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setVolunteers([
      ...volunteers,
      {
        organization: "",
        position: "",
        url: "",
        startDate: new Date(),
        endDate: new Date(),
        summary: "",
        highlights: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setVolunteers(volunteers.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("volunteers", volunteers);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Volunteer</h1>
      {volunteers.map((volunteer: any, index: any) => (
        <Volunteer
          key={index}
          volunteer={volunteer}
          setVolunteers={setVolunteers}
          id={index}
        />
      ))}
      <div className="flex justify-end gap-2">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={increment}> + Volunteer </Button>
        {counter > 1 && <Button onClick={decrement}> - Volunteer </Button>}
      </div>
    </>
  );
};

export default Volunteers;
