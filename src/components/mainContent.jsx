import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function MainContent() {
  return (
    <>
      <div className="viedo">
        <video
          loop="loop"
          muted="muted"
          autoPlay="auto"
          src="8176157-hd_1366_720_25fps.mp4"
        ></video>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Card>
              <Card.Img variant="top" src="breakfast.jpg" />
              <Card.Body>
                <Card.Title>Avocado Toast</Card.Title>
                <Card.Text>
                  Wake up to flavor with Avocado Toast with Roasted Tomatoes!
                  This perfect Breakfast with Avocado combines creamy
                  avocado,juicy roasted tomatoes.
                </Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  See Breakfast recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Card>
              <Card.Img variant="top" src="lunch.jpg" />
              <Card.Body>
                <Card.Title>Salmon Rice Bowls</Card.Title>
                <Card.Text>
                  These easy Salmon Rice Bowls have become a healthy and <br />
                  delicious staple for both lunch and dinner! They're quick and{" "}
                  <br />
                  easy and truly packed
                </Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  See Lunch recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Card>
              <Card.Img variant="top" src="dinner.jpg" />
              <Card.Body>
                <Card.Title>Mixed Dish</Card.Title>
                <Card.Text>
                  I can't tell which cheese it is but it looks like cameber or
                  aged sweet cheese with figs, arugula, walnuts, peaches, and
                  some type of glaze.
                </Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  See Dinner recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Card>
              <Card.Img variant="top" src="desserts.jpg" />
              <Card.Body>
                <Card.Title>Cheesecake</Card.Title>
                <Card.Text>
                  This New York-style cheesecake is rich, dense yet creamy and
                  not overly sweet. Together with the sweet base, you want to
                  impress!
                </Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  See Desserts recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}
