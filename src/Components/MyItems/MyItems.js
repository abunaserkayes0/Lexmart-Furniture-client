import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItemDetails from "../MyItemDetails/MyItemDetails";
const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  useEffect(() => {
    fetch(`https://agile-depths-74212.herokuapp.com/myItems?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, [email]);
  const handelDeleteItem = (id) => {
    const confirmedMassage = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (confirmedMassage) {
      fetch(`https://agile-depths-74212.herokuapp.com/myItem/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restItems = items.filter((item) => item._id !== id);
            setItems(restItems);
            alert("Items Deleted successfully");
          }
        });
    }
  };
  return (
    <div className="my-5">
      <Container>
        <Row sm={1} md={2} lg={3}>
          {items.map((item) => (
            <MyItemDetails
              handelDeleteItem={handelDeleteItem}
              key={item.name}
              item={item}
            ></MyItemDetails>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyItems;
