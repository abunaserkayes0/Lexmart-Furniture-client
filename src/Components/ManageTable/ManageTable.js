import useInventories from "../../hooks/useInventories";

const ManageTable = ({ inventory }) => {
  const [inventories, setInventories] = useInventories([]);
  const { _id, name, price, supplier_name, quantity } = inventory;
  const handelDelete = (id) => {
    const confirmed = window.confirm("Are sure you want to delete this item?");
    if (confirmed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const restInventories = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(restInventories);
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
            className="btn bg-primary text-white d-flex align-items-center justify-content-center"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </>
  );
};

export default ManageTable;
