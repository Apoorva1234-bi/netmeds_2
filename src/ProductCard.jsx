// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                <p className="card-text">Discount: {product.discount}% off</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
