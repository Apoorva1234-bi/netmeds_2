import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuantitySelector from '../../components/HomeLimitedCarouselViewAll/QuantitySelector';
import styles from '../../components/HomeLimitedCarouselViewAll/limitedOffers.module.css';
import style from '../../common/Button/AddToCartBtn.module.css'

const AddToCartButton = ({ quantity, setQuantity }) => {
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const handleAddToCart = () => {
    setShowQuantitySelector(true);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setShowQuantitySelector(false);
      setQuantity(1); // Reset quantity to 1 when hiding the selector
    }
  };

  return (
    <div className={styles.buttonContainer}>
      {showQuantitySelector ? (
        <QuantitySelector
          quantity={quantity}
          increment={increment}
          decrement={decrement}
        />
      ) : (
        <Button className={style.addToCartBtn} onClick={handleAddToCart}>Add to Cart</Button>
      )}
    </div>
  );
};

export default AddToCartButton;
