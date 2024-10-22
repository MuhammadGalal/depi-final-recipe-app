import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { BiHeart, BiSolidStar } from "react-icons/bi";
import { useSearch } from "../context/SearchContext";
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "../context/UserContext"; 

export default function Breakfast() {
    const [ratings, setRatings] = useState({})
    const [recipes, setRecipes] = useState([])
    const { search } = useSearch()
    const { favorites, addFavorite, removeFavorite } = useFavorites()
    const { user } = useUser(); 

    const handleClick = (recipeId, val) => {
        setRatings(prevRate => ({
            ...prevRate,
            [recipeId]: val,
        }))
    };

    const toggleFavorite = (recipe) => {
        if (favorites.some(fav => fav.id === recipe.id)) {
            removeFavorite(recipe.id)
        } else {
            addFavorite(recipe)
        }
    };
    const nav = useNavigate()

    const handleAddFavorite = (recipe) => {
        if (!user) {
            alert("Please log in to add favorites.");
            return;
        }

        fetch('http://localhost:3001/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id,
                recipeId: recipe.id,
                title: recipe.title,
                description: recipe.description,
                image: recipe.image,
                rating: ratings[recipe.id] || 0,
            }),
        })
            .then(res => res.json())
            .then(data => {
                addFavorite(data);
            })
    };

    useEffect(() => {
        fetch('http://localhost:3001/breakfast')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const filterRecipe = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1 className="text-center" style={{marginTop: "2rem"}}>Breakfast Recipes</h1>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
                    {filterRecipe.map(recipe => (
                        <div className="col" key={recipe.id}>
                            <div className="card pdcard">
                                <img src={recipe.image} className="card-img-top" alt="pic for the recipe"/>
                                <div className="card-body pdcardbody">
                                    <h5 className="card-title">{recipe.title}</h5>
                                    <p className="card-text">{recipe.description}</p>
                                </div>
                                <div className="mb-4 d-flex justify-content-around putyourclasses">
                                    <div className="star-rating">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className="star"
                                                onClick={() => handleClick(recipe.id, star)}
                                            >
                                                {ratings[recipe.id] >= star ? (
                                                    <BiSolidStar color="gold" />
                                                ) : (
                                                    <CiStar />
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="rating-display">
                                        Rating: (<span id="rating-value">{ratings[recipe.id] || 0}</span>)
                                    </div>
                                </div>
                                <div className="mb-4 d-flex justify-content-around wsbtn">
                                    <button onClick={()=> nav(`/top-meals/${recipe.id}`)} className="btn btn-primary">View Details</button>
                                    <button onClick={() => {
                                        toggleFavorite(recipe);
                                        handleAddFavorite(recipe);
                                    }}>
                                        {favorites.some(fav => fav.id === recipe.id) ? <BiHeart color="red" /> : <BiHeart />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
