// src/components/Cards/CardComponent.jsx
import React, { useState } from "react";

import "../../components/HomeMiddleCards/HMCard.css";
import wishList from "../../assets/Images/HomeMiddle/Limited_Time_Leads/wishlist-icon.svg";
import AddToCartButton from "../../common/Button/AddToCartButton";

function HomeLimitedCard({ img, title, price, finalPrice, getOff }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img src={img} className="cardImage" alt={title} />
      <img className="common-img" src={wishList} alt="wishlist icon" />
      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <span className="price-box">
          <span className="final-price">₹ {price}</span>
          <strike className="price">₹ {finalPrice}</strike>
        </span>
         <p className="discount">{getOff}</p>
        <AddToCartButton quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default HomeLimitedCard;
