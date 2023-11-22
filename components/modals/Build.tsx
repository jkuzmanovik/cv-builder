import useFormStore from "@/hooks/form-hook";


const Build = () => {
    const formStore = useFormStore();
    const data = formStore.json;
  return (
    <>
    <h1>Rabotam</h1>
    </>
  );
};

export default Build;
