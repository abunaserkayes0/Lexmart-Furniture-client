import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
const Inventories = () => {
  const [inventories] = useInventories();
  const topInventories = inventories.slice(0, 6);
  return (
    <div>
      <Container>
        <h2 className="text-center fw-bold my-3">Popular Inventories</h2>
        <Row sm={1} md={2} lg={3} className="g-3">
          {topInventories.map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </Row>
        <Link to="/manageInventories">
          <button className="btn btn-primary d-block mx-auto my-3">
            Manage Inventory
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default Inventories;
