import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";
const Inventory = ({ inventory }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, quantity, supplier_name, description } =
    inventory;
  return (
    <div>
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
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            className="btn btn-primary w-25 mx-auto my-2"
          >
            Update
          </button>
        </Card>
      </Col>
    </div>
  );
};

export default Inventory;
