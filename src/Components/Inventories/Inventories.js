import { Container, Row } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
const Inventories = ({ callback }) => {
  const [inventories, setInventories] = useInventories();
  const topInventories = inventories.slice(0, 6);
  return (
    <div>
      <Container>
        <Row sm={1} md={2} lg={3} className="g-3">
          {topInventories.map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventories;
