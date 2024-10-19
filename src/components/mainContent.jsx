import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Top5Meals from "./mainTop5meals";
import KetoMeals from "./ketoMeals";
import MainContentReviews from "./MainContentReviews";
import { useNavigate } from "react-router-dom";


export default function MainContent() {


const categoryNavigate = useNavigate()
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
      <hr className="hr" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4 box-container">
            <Card>
              <Card.Img className="img-box" variant="top" src="breakfast.jpg" />
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Breakfast</Card.Title>
                {/* <Card.Text>
                  Wake up to flavor with Avocado <br />
                  Toast with Roasted Tomatoes! <br />
                  This perfect Breakfast with <br />
                  Avocado combines creamy <br />
                  avocado,juicy roasted tomatoes.
                </Card.Text> */}
                <Button onClick={()=> categoryNavigate('/breakfast')} className="boxes-btn" variant="secondary" style={{ width: "100%" }}>
                  See Breakfast recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 box-container">
            <Card>
              <Card.Img className="img-box" variant="top" src="lunch.jpg" />
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Lunch</Card.Title>
                {/* <Card.Text>
                  These easy Salmon Rice Bowls <br />
                  have become a healthy and <br />
                  delicious staple for both lunch <br />
                  and  dinner! They're quick and <br />
                  easy and truly packed
                </Card.Text> */}
                <Button onClick={()=> categoryNavigate('/lunch')} className="boxes-btn" variant="secondary" style={{ width: "100%" }}>
                  See Lunch recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 box-container">
            <Card>
              <Card.Img className="img-box" variant="top" src="dinner.jpg" />
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Dinner</Card.Title>
                {/* <Card.Text>
                  I can't tell which cheese it is but <br />
                  it looks like cameber or aged <br />
                  sweet cheese with figs, arugula, <br />
                  walnuts, peaches, and some <br />
                  type of glaze.
                </Card.Text> */}
                <Button onClick={()=> categoryNavigate('/dinner')} className="boxes-btn" variant="secondary" style={{ width: "100%" }}>
                  See Dinner recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 box-container">
            <Card>
              <Card.Img className="img-box" variant="top" src="desserts.jpg" />
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Desserts</Card.Title>
                {/* <Card.Text>
                  This New York-style cheesecake <br />
                  is rich, dense yet creamy and <br />
                  not overly sweet. Together with <br />
                  the sweet base, you want to <br />
                  impress!
                </Card.Text> */}
                <Button onClick={()=> categoryNavigate('/dessert')} className="boxes-btn" variant="secondary" style={{ width: "100%" }}>
                  See Desserts recipes
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <KetoMeals />   {/*medany update*/}
      <Top5Meals />    {/*Yossef update*/}
      <MainContentReviews />  {/*mo'men update*/}
    </>
  );
}
