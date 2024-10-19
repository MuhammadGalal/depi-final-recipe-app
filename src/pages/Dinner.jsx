import { useState, useEffect } from "react";
import { CiBookmarkPlus} from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { BiSolidStar } from "react-icons/bi";

export default function Dinner() {
    const [ratings, setRatings] = useState({});
    const [recipes, setRecipes] = useState([])

    const handleClick = (recipeId, val) => {
        setRatings(prevRate => ({
            ...prevRate,
            [recipeId]: val,
        }));
    };

    useEffect(()=> {
        fetch('http://localhost:3001/dinner')
        .then(res=> res.json())
        .then((data) => {
            setRecipes(data)
        })

    },[])

    return (
        <>
            {/* <div className="category-container">
                <div className="cover-img">
                    <img src="breakfastcover2.jpeg" alt="" />
                </div>
                <div className="cards-container">
                    <div className="card-container">
                        <img src="https://placehold.co/600x400" alt="" />
                        <h5>Recipe Name</h5>
                        <div className="card-details">
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className="star"
                                        onClick={() => handleClick(star)}
                                    >
                                        {rate >= star ? (
                                            <BiSolidStar color="gold" />
                                        ) : (
                                            <CiStar />
                                        )}
                                    </span>
                                ))}
                            </div>
                            <div className="rating-display">
                                Rating: (<span id="rating-value">{rate}</span>)
                            </div>
                            <div className="favorite-icon">
                                <button>
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                 <div className="cover-img">
                    <img src="https://imageplaceholder.net/600x400" alt="pic here" />
                </div>
        <h1 class="text-center">Dinner recipes</h1>
        <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">


        {recipes.map(recipe => (
            <div class="col" key={recipe.id}>
                <div class="card pdcard">
                    <img src={recipe.image} class="card-img-top" alt="pic for the recipe"/>
                    <div class="card-body pdcardbody">
                        <h5 class="card-title">{recipe.title}</h5>
                        <p class="card-text">{recipe.description}</p>
                    </div>
                    <div class='mb-4 d-flex justify-content-around putyourclasses'>
                        <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className="star"
                                        onClick={() => handleClick(recipe.id ,star)}
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

                    <div class="mb-4 d-flex justify-content-around wsbtn">
                    <div> <button class="btn btn-primary">view details</button></div>
                        <div> <a href='*'><CiBookmarkPlus /> </a>
                        </div>
                    </div>
                </div>
            </div>
      ))}





        </div>
    </div>

        </>
    );
}
