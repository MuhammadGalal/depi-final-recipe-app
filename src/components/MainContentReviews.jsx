import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

function MainContentReviews() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navigaterev = useNavigate();

  return (
    <Container>
      <div className="pe">
        <div className="text-reviews-p">
          <p className="text-reviews">Top Six Reviewers</p>
        </div>
        <Carousel responsive={responsive}>
          <div className="card-review">
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
            <h2>Mo'men Ahmed</h2>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
          <div className="card-review">
            <img src="Galal.jpg" alt="Mohamed Galal" className="product--image" />
            <h2>Mohamed Galal</h2>
            <button
              onClick={() => navigaterev("/galalpage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
          <div className="card-review">
            <img src="Youssef.jpg" alt="Ahmed Youssef" className="product--image" />
            <h2>Ahmed Youssef</h2>
            <button
              onClick={() => navigaterev("/ahmedpage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
          <div className="card-review">
            <img src="medany.jpg" alt="Ahmed Medany" className="product--image" />
            <h2>Ahmed Medany</h2>
            <button
              onClick={() => navigaterev("/medanypage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
          <div className="card-review">
            <img src="Salah.jpg" alt="Mohamed salah" className="product--image" />
            <h2>Mohamed salah</h2>
            <button
              onClick={() => navigaterev("/salahpage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
          <div className="card-review">
            <img src="hossam.jpg" alt="Hossam El Din" className="product--image" />
            <h2>Hossam El Din</h2>
            <button
              onClick={() => navigaterev("/hossampage")}
              className="btn-review"
            >
              See Review
            </button>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}

export default MainContentReviews;
