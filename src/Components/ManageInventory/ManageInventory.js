import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
const ManageTable = ({ inventory }) => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useInventories([]);
  const { _id, name, price, image, description, supplier_name, quantity } =
    inventory;
  const handelDelete = (id) => {
    const confirmed = window.confirm("Are sure you want to delete this item?");
    if (confirmed) {
      fetch(`https://agile-depths-74212.herokuapp.com/inventory/${id}`, {
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
      <Col>
        <Card className="shadow-sm p-3">
          <Card.Img className=" img-fluid" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h2>${price}</h2>
            <Card.Text>{description}</Card.Text>
            <p className="text-danger">Provider:{supplier_name}</p>
            <p>Quantity:{quantity}</p>
          </Card.Body>
          <div className="d-flex">
            <button
              onClick={() => navigate(`/inventory/${_id}`)}
              className="btn btn-primary w-25 mx-auto my-2"
            >
              Update
            </button>
            <button
              onClick={() => handelDelete(_id)}
              className="btn w-25 mx-auto p-3"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default ManageTable;
