import { useEffect } from "react";


function MainContentReviews() {
    useEffect(() => {
        let scrollcontainer = document.querySelector(".top-reviews-divs");
        let backbtn = document.querySelector(".btn-left");
        let nextbtn = document.querySelector(".btn-right");

        nextbtn.addEventListener("click", () => {
            scrollcontainer.scrollLeft += 300;
        });
        backbtn.addEventListener("click", () => {
            scrollcontainer.scrollLeft -= 300;
        });
    }, []);
    return (
        <>
            {/* <-------------Top-Six-Reviews------------> */}
            <div className='perant'>
                <div className='text-reviews-p'>
                    <h1 className='text-reviews'>Top Six Reviews</h1>
                </div>
                <div className="top-reviews-divs">
                    <div>
                        <img src="mo'men.jpg" className="top-reviews" alt="" />
                        <p className='name'>Momen Ahmed</p>
                    </div>
                    <div>
                        <img src="Galal.jpg" className="top-reviews" alt="" />
                        <p className='name'>Mohamed Galal</p>
                    </div>
                    <div>
                        <img src="Youssef.jpg" className="top-reviews" alt="" />
                        <p className='name'>Ahmed Youssef</p>
                    </div>
                    <div>
                        <img src="medany.jpg" className="top-reviews" alt="" />
                        <p className='name'>Ahmed Medany</p>
                    </div>
                    <div>
                        <img src="Salah.jpg" className="top-reviews" alt="" />
                        <p className='name'>Mohamed Salah</p>
                    </div>
                    <div>
                        <img src="Hossam.jpg" className="top-reviews" alt="" />
                        <p className='name'>Hossam El Din</p>
                    </div>
                </div>

                <div className='button-reviews'>
                    <button className='btn-left' >Previous</button>
                    <button className='btn-right' >Next</button>
                </div>

            </div>

        </>
    )
}

export default MainContentReviews;