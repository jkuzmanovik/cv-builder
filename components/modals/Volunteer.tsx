import useFormStore from "@/hooks/form-hook"
import { Button } from "../ui/button";
import useStepStore from "@/hooks/step-hook";

const Volunteer = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();

  const handleBack = () => {
    stepStore.decreaseStep();
  }

  console.log(formStore.json)
  return (
    <>
    <Button onClick={handleBack}>Back</Button>
      <div>Volunteer</div>
    </>
  )
}

export default Volunteer