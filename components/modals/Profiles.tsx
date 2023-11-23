"use client";
import { useEffect, useState } from "react";
import Profile from "../Profile";
import { Button } from "@/components/ui/button";
import useStepStore from "@/hooks/step-hook";
import useFormStore from "@/hooks/form-hook";

const Profiles = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.profiles ? formStore.json.profiles.length : 1
  );
  const [profiles, setProfies] = useState(
    formStore.json.profiles
      ? formStore.json.profiles
      : [
          {
            network: "",
            username: "",
            website: "",
          },
        ]
  );

  const stepStore = useStepStore();
  const increment = () => {
    setCounter(counter + 1);
    setProfies([
      ...profiles,
      {
        network: "",
        username: "",
        website: "",
      },
    ]);
  };
  const decrement = () => {
    setCounter(counter - 1);
    setProfies(profiles.slice(0, -1));
  };
  const handleNext = () => {
    formStore.addField("profiles", profiles);
    stepStore.increaseStep();
  };
  const handleBack = () => {
    stepStore.decreaseStep();
  };
  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Profiles</h1>
        {profiles.map((profile: any, index: any) => (
          <Profile
            key={index}
            id={index}
            profile={profile}
            setProfies={setProfies}
          />
        ))}
        <div className="flex justify-end gap-2">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={increment}> +Profile </Button>
          {counter > 1 && <Button onClick={decrement}> -Profile </Button>}
        </div>
      </div>
    </>
  );
};

export default Profiles;
