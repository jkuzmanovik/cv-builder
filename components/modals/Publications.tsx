import useFormStore from "@/hooks/form-hook"
import useStepStore from "@/hooks/step-hook";
import { Button } from "../ui/button";

const Publications = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  console.log(formStore.json)


  const handleBack = () => {
    stepStore.decreaseStep();
  }


  return (
    <>
      <Button onClick={handleBack}>Back</Button>
    </>
  )
}

export default Publications