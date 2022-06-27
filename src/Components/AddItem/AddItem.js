import { useForm } from "react-hook-form";
import "./AddItems.css";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/inventory/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="my-3 fw-bold">Add New Item</h2>
      <form
        className=" d-flex flex-column gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("image", { required: true })}
          placeholder="Enter Your Image"
        />
        <input
          {...register("name", { required: true })}
          placeholder="Enter Your name"
        />
        <input
          {...register("description", { required: true })}
          placeholder="Enter Your description"
        />
        <input
          {...register("supplier_name", { required: true })}
          placeholder="Enter Your provider-name"
        />
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Enter Your Price"
        />
        <input
          type="number"
          {...register("quantity", { required: true })}
          placeholder="Enter Your quantity"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
