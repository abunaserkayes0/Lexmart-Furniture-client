import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Inventory from "../Inventory/Inventory";
const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("inventories.json")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, []);
  return (
    <div>
      <Container>
        <Row sm={1} md={2} lg={3} className='g-3'>
          {inventories.map((inventory) => (
            <Inventory inventory={inventory}></Inventory>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventories;
