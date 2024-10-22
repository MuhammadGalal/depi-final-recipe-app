import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../context/UserContext";


function FavoritesPage() {
    const { user } = useUser();
    const [favorites, setFavorites] = useState([]);

    const nav = useNavigate();
    

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3001/favorites?userId=${user.id}`)
                .then(res => res.json())
                .then(data => setFavorites(data))
        }
    }, [user]);
    const handleRemoveFavorite = (recipeId) => {
        fetch(`http://localhost:3001/favorites/${recipeId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setFavorites(favorites.filter(favorite => favorite.id !== recipeId));
            })
            .catch(err => console.error(err));
    };
    return (
        <>
        {/* <div className="covero.jpg">
            <img src="covero.jpg" alt="" />
        </div> */}
        <Container>
            {favorites.map(recipe => (
                <div className="review-p-fevo" key={recipe.id}>
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2">
                            <img src={recipe.image} alt="" className="img-fluid mt-1" id="img-favo" />
                        </div>
                        <div className="col-md-5">
                            <h2 className="mt-1">{recipe.title}</h2>
                            <p className="mt-2" id="favo-para">{recipe.description}</p>
                            <div className="links-favo">
                                <h6 className="star-logo"><FaStar /><span id="rate">{recipe.rating}</span></h6>
                                <a id="delete-logo" onClick={() => handleRemoveFavorite(recipe.id)}>
                                    <MdDeleteForever />
                                </a>
                            </div>
                            <button onClick={()=> nav(`/top-meals/${recipe.recipeId}`)}  type="button" id="btn-fevo">See Recipe</button>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </Container>
    </>
    )
}

export default FavoritesPage;