import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";
import { useState } from "react";
import Certificate from "../Certificate";

const Certificates = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState(
    formStore.json.certificates ? formStore.json.certificates.length : 1
  );
  const stepStore = useStepStore();

  const [certificates, setCertificates] = useState(
    formStore.json.certificates
      ? formStore.json.certificates
      : [
          {
            name: "",
            date: new Date(),
            website: "",
            issuer: "",
          },
        ]
  );

  const increment = () => {
    setCounter(counter + 1);
    setCertificates([
      ...certificates,
      {
        name: "",
        date: new Date(),
        website: "",
        issuer: "",
      },
    ]);
  };

  const decrement = () => {
    setCounter(counter - 1);
    setCertificates(certificates.slice(0, -1));
  };

  const handleNext = () => {
    formStore.addField("certificates", certificates);
    stepStore.increaseStep();
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };

  return (
    <>
      <div className="p-3 w-2/3 mx-auto container">
        <h1 className="text-xl pb-5 font-medium">Certificates</h1>
        {certificates.map((certificate: any, index: any) => (
          <Certificate
            key={index}
            id={index}
            certificate={certificate}
            setCertificates={setCertificates}
          />
        ))}
        <div className="flex justify-end gap-2">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={increment}> + Certificate </Button>
          {counter > 1 && <Button onClick={decrement}> - Certificate </Button>}
        </div>
      </div>
    </>
  );
};

export default Certificates;
