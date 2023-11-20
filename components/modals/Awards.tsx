import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook"
import { Button } from "../ui/button";

const Awards = () => {
  const stepStore = useStepStore();
  const formStore = useFormStore();

  console.log(formStore.json)


  return (
    <>
      <Button onClick={stepStore.increaseStep}>Next</Button>
      <Button onClick={stepStore.decreaseStep}>Back</Button>
    </>
  )
}

export default Awards