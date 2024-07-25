// src/components/OffersList.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OfferCard from "./OfferCard";
import QuickOrderCard from "./QuickOrderCard";
import limitedOffers from "../../assets/js/HomeMiddleCarouselsJs/limitedAllOffers";
import { useNavigate } from "react-router-dom";
// images
// import wishlist from '../../assets/Images/Limited_Time_Leads/wishlist-icon.svg'

const OffersList = () => {
  const navigate = useNavigate();

  const handleOfferListBack = () => {
    console.log("HandleOfferListBack called...");
    navigate("/");
  };

  return (
    <Container>
      <button onClick={handleOfferListBack}>Back To Home</button>

      <h2>Offers</h2>

      <Row>
        <Col md={8}>
          {limitedOffers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </Col>
        <Col md={4}>
          <QuickOrderCard />
        </Col>
      </Row>
    </Container>
  );
};

export default OffersList;
