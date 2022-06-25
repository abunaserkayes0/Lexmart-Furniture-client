import { Card, Container, Row } from "react-bootstrap";
import "./Reviews.css";
const Reviews = () => {
  return (
    <div className="align-items-center justify-content-center text-center my-5 py-5">
      <h2>Our Client Reviews</h2>
      <Container>
        <Row xs={1} md={2} lg={3}>
          <Card className="p-5 border-0 shadow-sm">
            <Card.Img
              className="review-image"
              variant="top"
              src="https://i.ibb.co/JHkQTzN/online-shopping-young-amazed-arab-guy-showing-mobi.png"
            />
            <Card.Body>
              <Card.Title>Martin Jonas</Card.Title>
              <Card.Text className="text-muted fst-italic">
                <q>
                  HubSpot migration with the Pros! Working with Tangible Words
                  was the best decision we made as we on-boarded to our new
                  HubSpot CRM. They are the pros without a doubt, from their
                  knowledge of the product to the methodology used to teach and
                  deploy.
                </q>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-5 border-0 shadow-sm">
            <Card.Img
              className="review-image"
              variant="top"
              src="https://i.ibb.co/XVLhQbd/image-business-guy-showing-credit-card-smiling-loo.png"
            />
            <Card.Body>
              <Card.Title>Stephen hugs</Card.Title>
              <Card.Text className="text-muted fst-italic">
                <q>
                  Alysha and Team come prepared and are great at executing. I
                  would recommend Tangible Words to anyone working with
                  HubSpot.I would not hesitate to engage with Alysha and the
                  Tangible Words team in the future or to recommend their
                  services.
                </q>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-5 border-0 shadow-sm">
            <Card.Img
              className="review-image"
              variant="top"
              src="https://i.ibb.co/7gRVmRc/smiling-bearded-young-man-blue-t-shirt-beanie-look.png"
            />
            <Card.Body>
              <Card.Title>Timber Cols</Card.Title>
              <Card.Text className="text-muted fst-italic">
                <q>
                  We have worked with Tangible Words for over a year now. It has
                  been a very productive year as they have helped us in so many
                  ways. Our migration to HubSpot was an overwhelming task and
                  they made it far more manageable
                </q>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
