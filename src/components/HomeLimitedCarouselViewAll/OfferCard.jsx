

// src/components/OfferCard.jsx

import React, { useState } from 'react';
import { Card, Row, Col, Button, Badge } from 'react-bootstrap';

import Timer from './Timer';
import styles from '../../components/HomeLimitedCarouselViewAll/limitedOffers.module.css'
import AddToCartButton from '../../common/Button/AddToCartButton'

const OfferCard = ({ image, title, tags, price, originalPrice, manufacturer, endsIn }) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <Card className={styles.offerCard}>
      <Row>
        <Col xs={3}>
          <Card.Img src={image} style={{marginTop:'30px'}} />
        </Col>
        <Col xs={9}>
          <Card.Body className={styles.offerDetails}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {tags.map(tag => (
                
                <Badge key={tag} bg="secondary" className={styles.me-1}>{tag}</Badge>
              ))}
            </Card.Text>
            <div className={styles.offerPrice}>
              <span className={styles.price}>₹ {price}</span>
              <div>
                <span className={styles.originalPrice}>MRP ₹ {originalPrice}</span>
                <Timer endTime={endsIn} />
              </div>
            </div>
            <Card.Text>{manufacturer}</Card.Text>
            <AddToCartButton quantity={quantity} setQuantity={setQuantity}/>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default OfferCard;
