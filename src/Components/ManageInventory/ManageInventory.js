import { Table } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";
import ManageTable from "../ManageTable/ManageTable";
import "./ManageInventory.css";
const ManageInventory = () => {
  const [inventories, setInventories] = useInventories();
  return (
    <>
      <div className="w-50 mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>price</th>
              <th>SuppLier_Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {inventories.map((inventory) => (
            <ManageTable
              key={inventory._id}
              inventory={inventory}
            ></ManageTable>
          ))}
        </Table>
      </div>
    </>
  );
};

export default ManageInventory;
