import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
// import "./KetoMeals.css"; // Custom CSS for animations and styling

const meals = [
  {
    id: 1,
    name: "Keto Breakfast",
    type: "Breakfast",
    calories: "500 cal",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Healthy-porridge-bowl-b1f9205.jpg?quality=90&resize=500,454",
    description: "A healthy keto breakfast to start your day.",
  },
  {
    id: 2,
    name: "Keto Lunch",
    type: "Lunch",
    calories: "600 cal",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg?quality=90&resize=500,454",
    description: "A fulfilling keto lunch meal.",
  },
  {
    id: 3,
    name: "Keto Dinner",
    type: "Dinner",
    calories: "700 cal",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/08/crispy-sesame-lemon-chicken-8830c24.jpg?quality=90&resize=556,505",
    description: "A delicious keto dinner meal.",
  },
  {
    id: 4,
    name: "Keto Dessert",
    type: "Dessert",
    calories: "300 cal",
    img: "https://images.immediate.co.uk/production/volatile/sites/2/2022/04/Tiramisu-e2a657d.jpg?quality=90&resize=556,505",
    description: "A sweet keto dessert to satisfy your cravings.",
  },
];
const defaultMeal = {
  name: "Keto Diet Overview",
  description:
    "Keto diet is a high-fat, low-carb diet that has been shown to offer various health benefits like weight loss and mental clarity.",
};

const KetoMeals = () => {
  const [activeMeal, setActiveMeal] = useState(defaultMeal);

  const handleHover = (meal) => {
    setActiveMeal(meal);
  };

  const handleMouseLeave = () => {
    setActiveMeal(defaultMeal); // Reset to default text when the mouse leaves
  };
const navigate = useNavigate()

  return (
    <Container className="mainContainer">
      <Row xs={2} md={2}>
        {/* Image Container */}
        <Col className="imageContainer">
          <Row xs={1} md={2} className="g-4">
            {meals.map((meal) => (
              <Col key={meal.id} className="meal-image-col" xs={12}>
                <Image
                  src={meal.img}
                  className="meal-image"
                  onMouseEnter={() => handleHover(meal)}
                  onMouseLeave={handleMouseLeave}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Details Container */}
        <Col md={6} className="detailsContainer">
          <h3>{activeMeal.name}</h3>
          <p>{activeMeal.description}</p>
          {activeMeal.type && (
            <div>
              <strong>Type:</strong> {activeMeal.type}
            </div>
          )}
          {activeMeal.calories && (
            <div>
              <strong>Calories:</strong> {activeMeal.calories}
            </div>
          )}
        </Col>
      </Row>
       <button style={{backgroundColor: "#212121"}} onClick={()=> navigate('/plan')} type="button" className="btn btn-primary btn-lg btn-block w-100 mt-3">
        plan your meals now!
      </button>
    </Container>
  );
};

export default KetoMeals;
// onClick={()=> nav("/plan")}