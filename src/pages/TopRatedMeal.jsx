import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiStarSwirl } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineRoomService, MdRateReview } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
export default function TopRatedMeal() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:3001/lunch/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setRecipe(data);
    })
}, [id])
useEffect(() => {
fetch(`http://localhost:3001/breakfast/${id}`)
.then((res) => res.json())
.then((data) => {
  setRecipe(data);
})
}, [id])
useEffect(() => {
fetch(`http://localhost:3001/dinner/${id}`)
.then((res) => res.json())
.then((data) => {
  setRecipe(data);
})
}, [id])
useEffect(() => {
fetch(`http://localhost:3001/dessert/${id}`)
.then((res) => res.json())
.then((data) => {
  setRecipe(data);
})
}, [id])

  return (
    <>
      <Container className="top-rated-meal">
        <section className="recipe-head">
          <h1 className="main-section-header">
            Top Rated Meal <GiStarSwirl />
            <div className="curved-line"></div>
          </h1>
          <div className="meal-container">
            <div className="top-rated-meal-col-left">
              <h2 className="recipe-header">{recipe.title}</h2>
              <div className="rate-share">
                <div className="rate">
                  <i className="rating-star">
                    <RiStarSFill />
                  </i>
                  <i className="rating-start">
                    <RiStarSFill />
                  </i>
                  <i className="rating-start">
                    <RiStarSFill />
                  </i>
                  <i className="rating-start">
                    <RiStarSFill />
                  </i>
                  <i className="rating-start">
                    <RiStarSFill />
                  </i>
                </div>
                <div className="share">
                  share reicpe:{" "}
                  <Link className="social-icon">
                    <FaFacebook />
                  </Link>{" "}
                  <Link className="social-icon">
                    <FaInstagram />
                  </Link>{" "}
                  <Link className="social-icon">
                    <FaXTwitter />{" "}
                  </Link>{" "}
                </div>
              </div>
              <p className="recipe-bio">
                {/* Chicken Tinga Tacos – the only chicken tinga tacos recipe you
                will ever need! Spicy, saucy, simple, and so fresh. Recipe is
                posted with permission from The Minimalist Kitchen (affiliate
                link) cookbook (although I’ve taken the liberty of adding “The
                Best” as a necessary recipe title prefix). */}
                {recipe.description}
              </p>
              <div className="recipe-time">
                <div>
                  <i>
                    <IoTimerOutline />
                  </i>
                  <p>total time: 20min</p>
                </div>
                <div>
                  <i>
                    <MdOutlineRoomService />
                  </i>
                  <p>Yield: 3 servings (10-12 tacos)</p>
                </div>
              </div>
            </div>
            <div className="top-rated-meal-col-right">
              <div className="meal-photo">
                <img
                  src={recipe.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="recipe-body">
          <div className="recipe-container">
            <div className="ingredients">
              <h4 className="section-header">
                Ingredients
                <div className="curved-line"></div>
              </h4>
              <p className="recipe-name">{recipe.title}</p>
              <div className="recipe-content">
                <p>- {recipe.description}</p>
                <p>- 1 cup roughly chopped sweet onion</p>
                <p>- 2 cloves garlic, minced</p>
                <p>- 1–2 chipotle peppers in adobo sauce, chopped</p>
                <p>- 1 teaspoon dried oregano</p>
                <p>- 1/2 teaspoon ground cumin</p>
                <p>- 3/4 cup canned crushed fire-roasted tomatoes</p>
                <p>- 1/4 cup chicken stock</p>
                <p>- 1/2 teaspoon kosher salt</p>
                <p>
                  - 3 cups shredded cooked chicken (rotisserie chicken works!)
                </p>
              </div>
            </div>
            <div className="instructions">
              <h4 className="section-header">
                Instructions
                <div className="curved-line"></div>
              </h4>
              <div className="recipe-content">
                <div>
                  <span>1</span>
                  <p>
                    Sauce: Heat a large skillet over medium. Once warm, add the
                    oil and onion. Sauté for 4 minutes or until tender, stirring
                    occasionally. Add in the garlic and cook for 30 seconds
                    more. Stir in the chipotles, oregano, and cumin, and toast
                    for 1 minute. Add in the tomatoes, stock, and salt. Bring to
                    a simmer, and cook for 7 minutes.
                  </p>
                </div>
                <div>
                  <span>2</span>
                  <p>
                    Blend: Place the tomato mixture in a high-powered or regular
                    blender, and blend until smooth.
                  </p>
                </div>
                <div>
                  <span>3</span>
                  <p>
                    Chicken: Return the blended sauce to the pan over low heat.
                    Add the chicken, and cook for 5 minutes. Taste and add more
                    salt if necessary.
                  </p>
                </div>
                <div>
                  <span>4</span>
                  <p>
                    Serving: Prepare the garnishes. To assemble, top the
                    tortillas with the chicken and garnish with the avocado
                    slices, cilantro, red onion, and cotija. Serve with a lime
                    wedge for squeezing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="review">
        <h1 className="main-section-header">
           Recipe Reviews <MdRateReview />
            <div className="curved-line"></div>
          </h1>
          <div className="review-container">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Review
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    id="formHorizontalReview"
                    placeholder="Your Review"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </section>
      </Container>
    </>
  );
}
