'use client'
import { useEffect, useRef, useState } from "react";
import Profile from "../Profile"
import { Button } from "../ui/button"
import useStepStore from "@/hooks/step-hook";



const Profiles = () => {
    const [counter, setCounter] = useState(1);
    const stepStore = useStepStore();
    const submitRef = useRef();


    const handleNext = () => {
        stepStore.increaseStep();
    }
    const handleBack = () => {
        stepStore.decreaseStep();
    }

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    
  return (
    <>
    <h1 className="text-xl pb-5 font-medium">Profiles</h1>

    {Array.from(Array(counter), (e, i) => {
        return <Profile key={i} />
    } )}
        <div className="flex justify-end gap-2">
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>
    <div className="flex gap-2">
        <Button onClick={increment}> +Profile </Button>
        {counter > 1 && <Button onClick={decrement}> -Profile </Button>}
    </div>
    </>
  )
}

export default Profiles