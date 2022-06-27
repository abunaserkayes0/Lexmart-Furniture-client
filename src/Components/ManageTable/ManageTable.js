import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useInventories from "../../hooks/useInventories";
// const [inventories, setInventories] = useInventories([]);
// const [inventories, setInventories] = useState([]);
// console.log(inventories);

const ManageTable = ({ inventory }) => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const { _id, name, price, supplier_name, quantity } = inventory;
  const [inventories, setInventories] = useState([]);
  console.log(inventories);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, [user.email]);

  const handelDelete = (id) => {
    const confirmed = window.confirm("Are sure you want to delete this item?");
    if (confirmed) {
      fetch(`http://localhost:5000/inventory/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            alert("Delete");
            const restInventories = inventories.filter(
              (inventory) => inventory._id !== id
            );
            setInventories(restInventories);
            // setReload(!reload);
          }
        });
    }
  };
  return (
    <>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>${price}</td>
          <td>{supplier_name}</td>
          <td>{quantity}</td>
          <button
            onClick={() => handelDelete(_id)}
            className="d-flex align-items-center justify-content-center"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </>
  );
};

export default ManageTable;
