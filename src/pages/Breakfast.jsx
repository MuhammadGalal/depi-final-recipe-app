import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BiSolidStar } from "react-icons/bi"; 

export default function Breakfast() {
    const [rate, setRate] = useState(0);

    const handleClick = (val) => {
        setRate(val);
        console.log(val);
    }

    return (
        <>
            <div className="category-container">
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
            </div>
        </>
    );
}
