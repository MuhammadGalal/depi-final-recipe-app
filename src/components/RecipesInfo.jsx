import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipesInfo = ({ mealsID }) => {
  //   const [mealsID, setMealsID] = useState([]); // Example mealsID array
  const [recipesInfo, setRecipesInfo] = useState([]); // To store fetched recipe data for all meals

  // Function to fetch recipe for a single meal ID
  const fetchRecipe = async (mealId) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=babc784697f44d2696d023eb20d3a832`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      return null;
    }
  };

  // Fetch all meal recipes when mealsID changes
  useEffect(() => {
    const fetchAllRecipes = async () => {
      const recipePromises = mealsID.map((mealId) => fetchRecipe(mealId));
      const fetchedRecipes = await Promise.all(recipePromises); // Wait for all fetches
      setRecipesInfo(fetchedRecipes.filter((recipe) => recipe)); // Set valid recipe data
    };

    if (mealsID.length > 0) {
      fetchAllRecipes();
    }
  }, [mealsID]);

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="11">
          {/* Display recipe information in cards if recipes exist */}
          {recipesInfo.length > 0 && (
            <Row>
              <h1>Your meal plan</h1>
              {recipesInfo.map((recipe) => (
                <Col key={recipe.id} md="4">
                  <Card className="mealCard mt-4">
                    <Card.Img
                      variant="top"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                        <strong>Cooking Time:</strong> {recipe.readyInMinutes}{" "}
                        minutes <br />
                        <strong>Price Per Serving:</strong> $
                        {recipe.pricePerServing} <br />
                        <strong>Recipe Score:</strong> {recipe.spoonacularScore.toFixed(2)}{" "}
                      </Card.Text>
                      <Button
                        variant="primary"
                        href={recipe.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Recipe
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RecipesInfo;
