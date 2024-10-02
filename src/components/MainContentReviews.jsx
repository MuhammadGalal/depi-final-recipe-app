import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function MainContentReviews() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <Container>
            <div className="pe">
                <div className="text-reviews-p">

                    <p className="text-reviews">Top Six Review</p>
                </div>
                <Carousel responsive={responsive}>
                    <div className="card-review">
                        <img src="mo'men.jpg" alt="" className="product--image" />
                        <h2>Momen Ahmed</h2>
                        <button>See Review</button>
                    </div>
                    <div className="card-review">
                        <img src="galal.jpg" alt="" className="product--image" />
                        <h2>Mohamed Galal</h2>
                        <button>See Review</button>
                    </div>
                    <div className="card-review">
                        <img src="Youssef.jpg" alt="" className="product--image" />
                        <h2>Ahmed Youssef</h2>
                        <button>See Review</button>
                    </div>
                    <div className="card-review">
                        <img src="medany.jpg" alt="" className="product--image" />
                        <h2>Ahmed Medany</h2>
                        <button>See Review</button>
                    </div>
                    <div className="card-review">
                        <img src="salah.jpg" alt="" className="product--image" />
                        <h2>Mohamed salah</h2>
                        <button>See Review</button>
                    </div>
                    <div className="card-review">
                        <img src="hossam.jpg" alt="" className="product--image" />
                        <h2>Hossam El Din</h2>
                        <button>See Review</button>
                    </div>
                </Carousel>
            </div>
        </Container>

    )
}



export default MainContentReviews;