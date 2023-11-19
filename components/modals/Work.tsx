import useFormStore from "@/hooks/form-hook"
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Work = () => {
  const formStore = useFormStore();
  const [counter,setCounter] = useState(1);

  useEffect(() => {
    console.log(formStore.formData);
  },[counter])

  return (
    <>
      <div>Wor2k</div>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
    </>
  )
}

export default Work