import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Inventory from "../Inventory/Inventory";
const Inventories = ({ callback }) => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, [callback]);
  console.log("we have check = ", callback);
  return (
    <div>
      <Container>
        <Row sm={1} md={2} lg={3} className="g-3">
          {inventories.map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventories;
