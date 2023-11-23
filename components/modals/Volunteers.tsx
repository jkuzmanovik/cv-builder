import useFormStore from "@/hooks/form-hook";
import { useState } from "react";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";
import Volunteer from "../Volunteer";
const Volunteers = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.volunteer ? formStore.json.volunteer.length : 1
  );
  const stepStore = useStepStore();
  const [volunteer, setVolunteer] = useState(
    formStore.json.volunteer
      ? formStore.json.volunteer
      : [
          {
            organization: "",
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
    setVolunteer([
      ...volunteer,
      {
        organization: "",
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
    setVolunteer(volunteer.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("volunteer", volunteer);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Volunteer</h1>
        {volunteer.map((volunteer: any, index: any) => (
          <Volunteer
            key={index}
            volunteer={volunteer}
            setVolunteer={setVolunteer}
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
      </div>
    </>
  );
};

export default Volunteers;
