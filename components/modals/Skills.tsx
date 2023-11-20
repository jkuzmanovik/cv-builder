import useFormStore from "@/hooks/form-hook"

const Skills = () => {

  const formStore = useFormStore();
  console.log(formStore.json)

  return (
    <div>Skills</div>
  )
}

export default Skills