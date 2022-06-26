import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.css";
const InventoryDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { name, image, price, description, supplier_name, quantity } = details;
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
      });
  }, [id]);

  return (
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
              <strong>Quantity :</strong>
              <button className="btn btn-primary mx-2">Delivery</button>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">{supplier_name}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
