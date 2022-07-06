import { Card, Col } from "react-bootstrap";

const MyItemDetails = ({ item, handelDeleteItem }) => {
  const { _id, name, image, price, description, supplier_name, quantity } =
    item;
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
            onClick={() => handelDeleteItem(_id)}
            className="btn w-25 mx-auto p-3"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </Card>
      </Col>
    </div>
  );
};

export default MyItemDetails;
