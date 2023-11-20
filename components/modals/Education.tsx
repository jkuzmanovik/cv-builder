import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";

const Education = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();  
  console.log(formStore.json)

  const handleBack = () => {
    stepStore.decreaseStep();
  }
  const handleNext = () => {
    stepStore.increaseStep();
  }

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </>
  )
}

export default Education