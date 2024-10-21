
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
export default function Top5Meals() {

    const [recipe, setRecipe] = useState(null)
    const [recipeBreakfast, setRecipeBreakfast] = useState(null)
    const [recipeDinner, setRecipeDinner] = useState(null)
    const [recipeDessert, setRecipeDessert] = useState(null)
    // const navigate = useNavigate()

    useEffect(()=> {
        fetch('http://localhost:3001/lunch')
        .then(res=> res.json())
        .then((data)=> {
            const random = Math.floor(Math.random() * data.length);
            setRecipe(data[random])
        })
    },[])
    useEffect(()=> {
        fetch('http://localhost:3001/breakfast')
        .then(res=> res.json())
        .then((data)=> {
            const random = Math.floor(Math.random() * data.length);
            setRecipeBreakfast(data[random])
        })
    },[])
    useEffect(()=> {
        fetch('http://localhost:3001/dinner')
        .then(res=> res.json())
        .then((data)=> {
            const random = Math.floor(Math.random() * data.length);
            setRecipeDinner(data[random])
        })
    },[])
    useEffect(()=> {
        fetch('http://localhost:3001/dessert')
        .then(res=> res.json())
        .then((data)=> {
            const random = Math.floor(Math.random() * data.length);
            setRecipeDessert(data[random])
        })
    },[])

    return(
    <>
    <Container>
                <h1 className="section-header">Top rated meals</h1>
        <div className="meals-container">
             
                

                {recipe ? (

             
                <div className="top-meals-left-col">
                    {/* <img src={recipe.image} alt="" /> */}
                    <Link to={`/top-meals/${recipe.id}`}>
                        <h2>{recipe.title}</h2>
                        <img style={{width: "100%"}} src={recipe.image} alt="" />
                     </Link>
                </div>
                    ):
                    <img src="" alt="" />
                    }
                   
                <div className="top-meals-right-col">
                    {recipeBreakfast ? (

                    <div className="top-1-meal top-meal">
                        <Link to={`/top-meals/${recipeBreakfast.id}`}>
                            <h2>{recipeBreakfast.title}</h2>
                            <img style={{width: "100%"}} src={recipeBreakfast.image} alt=""/>
                        </Link>
                        
                    </div>
                    ): <img src="" alt="" /> }

                    {recipeDinner ? (

                    <div className="top-2-meal top-meal">
                        <Link to={`/top-meals/${recipeDinner.id}`}>
                            <h2>{recipeDinner.title}</h2>
                            <img style={{width: "100%"}} src={recipeDinner.image} alt=""/>
                        </Link>
                        
                    </div>
                    ): <img src="" alt="" />}
                    {recipeDessert ? (

                    <div className="top-3-meal top-meal">
                        <Link to={`/top-meals/${recipeDessert.id}`}>
                            <h2>{recipeDessert.title}</h2>
                            <img style={{width: "100%"}} src={recipeDessert.image} alt=""/>
                        </Link>
                        
                    </div>
                    ):<img src="" alt="" />}
                    {recipe ? (
                        <div className="top-4-meal top-meal">
                        <Link to={`/top-meals/${recipe.id}`}>
                            <h2>{recipe.title}</h2>
                            <img style={{width: "100%"}} src={recipe.image} alt=""/>
                        </Link>
                        
                    </div>

                    ): <img src="" alt="" /> }
                    
                </div>
        </div>
    </Container>
    </>);
}