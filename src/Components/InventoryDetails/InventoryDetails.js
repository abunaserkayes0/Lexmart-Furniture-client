import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.css";
const InventoryDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { name, image, price, description, supplier_name, quantity } = details;
  const [reload, setReload] = useState(false);
  const increaseQuantityRef = useRef(0);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
      });
  }, [id, reload]);

  const handelDecreaseQuantity = () => {
    const finalQuantity = parseFloat(quantity) - 1;
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ finalQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setReload(!reload);
        }
      });
  };
  const handelIncreaseQuantity = () => {
    const inputFieldQuantity = increaseQuantityRef.current.value;
    const finalQuantity = parseFloat(inputFieldQuantity) + parseFloat(quantity);

    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({finalQuantity}),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setReload(!reload);
          increaseQuantityRef.current.value = "";
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
                  onClick={handelDecreaseQuantity}
                  className="btn btn-primary mx-2"
                >
                  Delivery
                </button>
                <p className="card-text">{description}</p>

                <p className="card-text">
                  <input type="text" ref={increaseQuantityRef} />
                  <button
                    onClick={handelIncreaseQuantity}
                    className="btn btn-primary "
                  >
                    Increase
                  </button>
                </p>
                <p className="card-text">
                  <small className="text-danger">{supplier_name}</small>
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
