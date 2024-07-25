import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LimitedCarousel from "../../components/HomeMiddleCarousels/LimitedCarousel";
import FitnessCarousel from "../../components/HomeMiddleCarousels/FitnessCarousel";
import BestSellersCarousel from "../../components/HomeMiddleCarousels/BestSellersCarousel";
import NewArrival from "../../components/HomeMiddleCarousels/NewArrivalCarousel";
import HexagonNutritionCarousel from "../../components/HomeMiddleCarousels/HexagonNutritionCarousel";



const HomeBodyMainPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
    <LimitedCarousel/>
        </Row>
        <br />
        
{/* 
        <Row>
          <FitnessCarousel />
        </Row> */}

        <Row>
          <BestSellersCarousel/>
        </Row>

        <Row>
          <NewArrival/>
        </Row>

        {/* <Row>
          <HexagonNutritionCarousel/>
        </Row> */}
      </Container>
    </>
  );
};

export default HomeBodyMainPage;
