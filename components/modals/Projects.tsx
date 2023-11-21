import useFormStore from "@/hooks/form-hook"

const Projects = () => {
  const formStore = useFormStore();
  console.log(formStore)


  return (
    <div>Projects</div>
  )
}

export default Projects