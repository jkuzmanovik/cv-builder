import useFormStore from "@/hooks/form-hook";


const Build = () => {
    const formStore = useFormStore();
    const data = formStore.json;
  return (
    <>
    <div className="p-3 w-2/3 mx-auto container">
    <h1>Rabotam</h1>
    </div>
    </>
  );
};

export default Build;
