import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.css";
const InventoryDetails = () => {
  const [reload, setReload] = useState(false);

  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { _id, name, image, price, description, supplier_name, quantity } =
    details;
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
      });
  }, [id]);
  const handelQuantity = (id) => {
    fetch(`http://localhost:5000/inventory/count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setReload(!reload);
          /* const random= Math.floor(1000 + Math.random() * 9000)
          setCallback(random) */
        }
      });
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="card mb-3" style={{ maxWidth: "750px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h3>${price}</h3>
                <strong>Quantity :{quantity}</strong>
                <button
                  onClick={() => handelQuantity(_id)}
                  className="btn btn-primary mx-2"
                >
                  Delivery
                </button>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">{supplier_name}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/manageTable">
        <button className="btn btn-primary d-block mx-auto">
          Manage Inventory
        </button>
      </Link>
    </>
  );
};

export default InventoryDetails;
