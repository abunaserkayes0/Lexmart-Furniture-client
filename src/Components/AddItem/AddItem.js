import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./AddItems.css";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    const { description, image, name, price, quantity, supplier_name } = data;
    fetch(`https://murmuring-basin-78335.herokuapp.com/inventory/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Data added successfully");
          navigate("/");
        }
      });
    const myItem = {
      name: name,
      image: image,
      price: price,
      quantity: quantity,
      description: description,
      supplier_name: supplier_name,
      email: e.target.email.value,
      displayName: e.target.displayName.value,
    };
    fetch(`https://murmuring-basin-78335.herokuapp.com/myItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ myItem }),
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
          placeholder="Enter Your Image link"
        />
        <input
          {...register("name", { required: true })}
          placeholder="Enter Your name"
        />
        <input
          {...register("description", { required: true })}
          placeholder="Enter Your description"
        />
        <input name="email" value={user?.email} readOnly />
        <input name="displayName" value={user?.displayName} readOnly />
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
        <input
          className="btn btn-primary"
          type="submit"
          value="Add Inventory"
        />
      </form>
    </div>
  );
};

export default AddItem;
