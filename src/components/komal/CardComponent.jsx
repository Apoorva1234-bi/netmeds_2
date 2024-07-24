import React from "react";
import "../../assets/css/Komalcard.css";
// import wishList from "../../assets/Images/Limited_Time_Leads/wishlist-icon.svg";

function CardComponent({ img, title, price, finalPrice, getOff }) {
    return (
        <div className="card" > {/*display : flex */}
            <a href="#"> 
                <img src={img} className="cardImage" alt={title} />
                {/* <img className="common-img" src={wishList} alt="wishlist icon" /> */}
                <div className="cardContent">
                    <div className="cardTitle" >{title}</div>
                    <span className="price-box">
                        <span className="final-price">₹ {price}</span>
                        <strike className="price">₹ {finalPrice}</strike>
                    </span>

                    <p className="discount">{getOff}</p>
                    <button className="card-btn mb-4">ADD TO CART</button>
                </div>
            </a>
        </div>
    );
}

export default CardComponent;