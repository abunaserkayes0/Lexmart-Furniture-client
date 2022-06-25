import { Container, Row } from "react-bootstrap";
import "./TopCategories.css";
const TopCategories = () => {
  return (
    <Container>
      <h2 className="text-center my-3 text-bold">Top Categories</h2>
      <Row sm={1} md={2} lg={3} className="text-center">
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/YQHcTJ2/SOFA.png" alt="" />
          <h6>Sofa</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/Q8rmZyB/Rocking-Chair.png" alt="" />
          <h6>Rocking Chair</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/jkf99pt/Oven-Box.png" alt="" />
          <h6>Oven-Box</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/tY4RmkN/Office-Table.png" alt="" />
          <h6>Office Table</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/Pr4css6/Office-Chair.png" alt="" />
          <h6>Office Chair</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/sQgMZJj/Mattress.png" alt="" />
          <h6>Mattress</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/4trJrXy/Dressing-Table.png" alt="" />
          <h6>Dressing Table</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/WDS4NNf/Showcase.png" alt="" />
          <h6>Showcase</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/zVm92V3/bed.png" alt="" />
          <h6>Bed</h6>
        </article>
        <article className="shadow-sm  p-3">
          <img src="https://i.ibb.co/F3khZV8/almirah.png" alt="" />
          <h6>Almirah</h6>
        </article>
      </Row>
    </Container>
  );
};

export default TopCategories;
