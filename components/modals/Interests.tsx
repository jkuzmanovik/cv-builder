import useFormStore from "@/hooks/form-hook"

const Interests = () => {

  const formStore = useFormStore();
  console.log(formStore.json)
  return (
    <div>Interests</div>
  )
}

export default Interests