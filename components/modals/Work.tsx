import useFormStore from "@/hooks/form-hook"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useStepStore from "@/hooks/step-hook";

const Work = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();

  useEffect(() => {
    console.log(formStore)
  }, [formStore])

  return (
    <>
    <Button onClick={() => stepStore.increaseStep()}>Next</Button>
    <Button onClick={() => stepStore.decreaseStep()}>Back</Button>
      <div>Work</div>
    </>
  )
}

export default Work