import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./ManageInventories.css";
const ManageInventories = () => {
  const [inventories] = useInventories();
  return (
    <>
      <div className="my-5">
        <Container>
          <Row sm={1} md={2} lg={3} className="g-4">
            {inventories.map((inventory) => (
              <ManageInventory
                key={inventory._id}
                inventory={inventory}
              ></ManageInventory>
            ))}
          </Row>
        </Container>
      </div>
      <Link to="/addItem">
        <button className="btn btn-primary d-block mx-auto my-3">
          Add Item
        </button>
      </Link>
    </>
  );
};

export default ManageInventories;
