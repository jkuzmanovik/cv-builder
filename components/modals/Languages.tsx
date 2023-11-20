import useFormStore from "@/hooks/form-hook"
import useStepStore from "@/hooks/step-hook";
import { useState } from "react";
import Language from "../Language";
import { Button } from "../ui/button";


const Languages = () => {
  const formStore = useFormStore();
  const [counter, setCounter] = useState( formStore.json.languages ? formStore.json.languages.length : 1 )
  const stepStore = useStepStore();
  const [languages, setLanguages] = useState(
    formStore.json.languages
    ? formStore.json.languages
    : [
      {
        language: "",
        fluency: "",
      }
    ]
  )

  const increment = () => {
    setCounter(counter + 1);
    setLanguages([
      ...languages,
      {
        language: "",
        fluency: "",
      }
    ])
  }

  const decrement = () => {
    setCounter(counter - 1);
    setLanguages(languages.slice(0, -1));
  }

  const handleNext = () => {
    formStore.addField("languages", languages);
    stepStore.increaseStep();
  }

  const handleBack = () => { 
    stepStore.decreaseStep();
  }

  return (
    <>
      <h1 className="text-xl pb-5 font-medium">Volunteers</h1>
      {languages.map((language:any, index:any) => (
         <Language
            key={index}
            id={index}
            language={language}
            setLanguages={setLanguages}
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

export default Languages