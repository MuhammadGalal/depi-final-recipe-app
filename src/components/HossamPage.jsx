import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


function HossamPage() {

    const navigaterev = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <Container>
        <div className="review-p">
            <div className="row" id="bg-prof-img">
                <div className="col-md-5" >
                    <img
                        src="hossam.jpg"
                        alt=""
                        className="img-fluid my-5"
                        id="img-prof"
                    />

                </div>
                <div className="col-md-5 ">
                    <h1 className="mt-5 ">
                        Hossam El Din
                    </h1>
                    <p className="mt-4">
                        As an Danish who loves food and flavors, I believe that cooking is an integral part of our culture. It is not just a way of preparing meals, but an art that carries deep traditions and family heirlooms. Therefore, as a connoisseur and professional cook, I decided to review a new website that I recently came across that contains traditional and modern Danish recipes. When I entered the site, the first thing that attracted me was its elegant design and the ease of navigating between the recipes. There were various categories that included main dishes, appetizers, and desserts, each of which reflected the essence of Danish cuisine in innovative and authentic ways at the same time.
                    </p>
                    <div className="links">
                        <a href='/' className="links-logo"><i><FaFacebook /></i> </a>
                        <a href='/' className="links-logo"><i><FaInstagram /></i> </a>
                        <a href='/' className="links-logo"><i><RiTwitterXLine /></i> </a>
                    </div>
                    <button type="button" className="btn-prof" onClick={() => navigaterev("/login")}>
                        Contact You
                    </button>
                </div>

            </div>
        </div>
    </Container>;
}

export default HossamPage;