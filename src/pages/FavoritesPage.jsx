import { Container } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function FavoritesPage() {
    return (
        <>
            <div className="covero.jpg">
                <img
                    src="covero.jpg"
                    alt=""
                // id="img-favo-cover"
                />
            </div>

            <Container >
                <div className="review-p-fevo">
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2" >
                            <img
                                src="metballs.jpg"
                                alt=""
                                className="img-fluid mt-1"
                                id="img-favo"
                            />

                        </div>
                        <div className="col-md-5 ">
                            <h2 className="mt-1 ">
                                Spaghetti And Meatballs
                            </h2>
                            <p className="mt-2" id="favo-para">
                                Spaghetti And Meatballs And Tomato Sauce
                            </p>

                            <div className="links-favo">
                                <div>
                                    <h6 className="star-logo"><FaStar /><span id="rate">4.9</span></h6>
                                </div>
                                <div>
                                    <a id="love-logo"><i><MdFavorite /></i> </a>
                                </div>

                                <div>
                                    <a id="delete-logo"><i><MdDeleteForever /></i> </a>
                                </div>

                            </div>
                            <button type="button" id="btn-fevo">
                                See Recipe
                            </button>

                        </div>

                    </div>
                </div>
                <hr />

                <div className="review-p-fevo">
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2" >
                            <img
                                src="meatlouf.jpg"
                                alt=""
                                className="img-fluid mt-1"
                                id="img-favo"
                            />

                        </div>
                        <div className="col-md-5 ">
                            <h2 className="mt-1 ">
                                Classic Meatloaf
                            </h2>
                            <p className="mt-2" id="favo-para">
                                Meatloaf is so much more than a giant hunk of ground beef in a loaf shape
                            </p>

                            <div className="links-favo">
                                <div>
                                    <h6 className="star-logo"><FaStar /><span id="rate">4.9</span></h6>
                                </div>
                                <div>
                                    <a id="love-logo"><i><MdFavorite /></i> </a>
                                </div>

                                <div>
                                    <a id="delete-logo"><i><MdDeleteForever /></i> </a>
                                </div>

                            </div>
                            <button type="button" id="btn-fevo">
                                See Recipe
                            </button>

                        </div>

                    </div>
                </div>
                <hr />

                <div className="review-p-fevo">
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2" >
                            <img
                                src="pizza.jpg"
                                alt=""
                                className="img-fluid mt-1"
                                id="img-favo"
                            />

                        </div>
                        <div className="col-md-5 ">
                            <h2 className="mt-1 ">
                                Supreme Pizza
                            </h2>
                            <p className="mt-2" id="favo-para">
                                It's full of fresh veggies, meat, cheese and sauce on a homemade crust
                            </p>

                            <div className="links-favo">
                                <div>
                                    <h6 className="star-logo"><FaStar /><span id="rate">4.9</span></h6>
                                </div>
                                <div>
                                    <a id="love-logo"><i><MdFavorite /></i> </a>
                                </div>

                                <div>
                                    <a id="delete-logo"><i><MdDeleteForever /></i> </a>
                                </div>

                            </div>
                            <button type="button" id="btn-fevo">
                                See Recipe
                            </button>

                        </div>

                    </div>
                </div>
                <hr />

                <div className="review-p-fevo">
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2" >
                            <img
                                src="burger.jpg"
                                alt=""
                                className="img-fluid mt-1"
                                id="img-favo"
                            />

                        </div>
                        <div className="col-md-5 ">
                            <h2 className="mt-1 ">
                                Double Big Tasty Burger
                            </h2>
                            <p className="mt-2" id="favo-para">
                                Two juicy beef patties stacked together with a medley of flavors elevate this mouthwatering masterpiece.
                            </p>

                            <div className="links-favo">
                                <div>
                                    <h6 className="star-logo"><FaStar /><span id="rate">4.9</span></h6>
                                </div>
                                <div>
                                    <a id="love-logo"><i><MdFavorite /></i> </a>
                                </div>

                                <div>
                                    <a id="delete-logo"><i><MdDeleteForever /></i> </a>
                                </div>

                            </div>
                            <button type="button" id="btn-fevo">
                                See Recipe
                            </button>

                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default FavoritesPage;