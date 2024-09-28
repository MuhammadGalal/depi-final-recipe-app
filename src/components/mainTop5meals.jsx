import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
export default function Top5Meals() {
    return(
    <>
    <Container>
                <h1 className="section-header">Top rated meals</h1>
        <div className="meals-container">
                <div to="top-rated-meal" className="top-meals-left-col">
                    <Link to="top-rated-meal"><h2>Chicken Tinga Tacos</h2> </Link>
                </div>

                <div className="top-meals-right-col">
                    <div className="top-1-meal">
                        <Link> <h2>Sunday Chili</h2></Link>
                        
                    </div>
                    <div className="top-2-meal">
                        <Link> <h2>Chicken Burgers with Kimchi Bacon Jam</h2></Link>
                        
                    </div>
                    <div className="top-3-meal">
                        <Link> <h2>Spicy Peanut Soup with Sweet Potato</h2></Link>
                        
                    </div>
                    <div className="top-4-meal">
                        <Link> <h2>Unbelievably Good Cashew Coffee</h2></Link>
                        
                    </div>
                </div>
        </div>
    </Container>
    </>);
}