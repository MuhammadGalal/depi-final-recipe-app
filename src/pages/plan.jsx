import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import RecipesInfo from "./RecipesInfo";
import RecipesInfo from "../components/RecipesInfo";
// import LoadingButton from "./button";
import LoadingButton from "../components/Button";
// import "./styles.css";


const PlanPage = () => {
  const [calories, setCalories] = useState("");
  const [mealPlan, setMealPlan] = useState(null); // To store fetched recipe data
  const [meals, setMeals] = useState([]);

  const fetchMealPlan = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=babc784697f44d2696d023eb20d3a832&timeFrame=day&targetCalories=${calories}`
      );
      const data = await response.json();
      console.log(data); // Log the full recipe data to the console
      console.log(data.meals);
      setMealPlan(data); // Store the data in state to display it
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const [mealsID, setMealsID] = useState([]);

  useEffect(() => {
    // Extract meals IDs
    const ids = meals.map((meal) => meal.id);
    console.log(ids);
    setMealsID(ids);
  }, [meals]);
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

  return (
    <Container className="mealPlan">
      <Row className="justify-content-md-center mt-5">
        <Col md="8">
          <h1>Get your daily meal Plan</h1>
          <Form>
            <Form.Group>
              <Form.Label className="mt-4">Enter Calories limit</Form.Label>
              <Form.Control
                type="number"
                placeholder="Calories (e.g. 2000)"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </Form.Group>
            <LoadingButton onClick={fetchMealPlan} />

            {/* <Button className="mt-3" variant="primary" onClick={fetchMealPlan}>
              Get daily meal Plan
            </Button> */}
          </Form>

          {/* Display recipe information in a card if the recipe exists */}
          {mealPlan && (
            <Card className="mealInfo mt-3">
              <Card.Body>
                <Card.Title>total meals info</Card.Title>
                <Card.Text>
                  <strong>total calories:</strong> {mealPlan.nutrients.calories}{" "}
                  calories <br />
                  <strong>total carbs:</strong>{" "}
                  {mealPlan.nutrients.carbohydrates} <br />
                  <strong>total fat:</strong> {mealPlan.nutrients.fat} <br />
                  <strong>total protein:</strong> {mealPlan.nutrients.protein}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      <RecipesInfo mealsID={mealsID} />
    </Container>
  );
};

export default PlanPage;

// import React, { useState } from "react";
// import { Button, Form, Container, Row, Col } from "react-bootstrap";

// const App = () => {
//   const [recipeId, setRecipeId] = useState("");

//   const fetchRecipe = async () => {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=babc784697f44d2696d023eb20d3a832`
//       );
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching recipe:", error);
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col md="6">
//           <h1>Get Recipe Information</h1>
//           <Form>
//             <Form.Group>
//               <Form.Label>Enter Recipe ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Recipe ID"
//                 value={recipeId}
//                 onChange={(e) => setRecipeId(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={fetchRecipe}>
//               Get Recipe
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;
