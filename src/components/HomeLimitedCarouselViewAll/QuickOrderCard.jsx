

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../../components/HomeLimitedCarouselViewAll/limitedOffers.module.css';

const QuickOrderCard = () => {
  return (
    
    <Card className={styles.quickOrderCard}>
      <Card.Body className={styles.quickOrderCardBody}>
        <Card.Title>Don't have time?</Card.Title>
        <Card.Text>Quick Order</Card.Text>
        <Card.Text>Upload doctor's prescription and we will add the medicines for you!</Card.Text>
        <Card.Text>Order within 2 minutes</Card.Text>
        <Button variant="secondary">Upload</Button>
      </Card.Body>
    </Card>
  );
};

export default QuickOrderCard;
