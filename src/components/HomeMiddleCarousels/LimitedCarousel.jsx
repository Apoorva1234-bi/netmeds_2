// ----------------------------------------------------------------------

import React from "react";

import limitedItems from "../../assets/js/HomeMiddleCarouselsJs/limitedItems.js";
import styles from "./limitedCarousel.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeLimitedCard from "../HomeMiddleCards/HomeLimitedCard.jsx";

const LimitedCarousel = () => {
  const data = limitedItems;

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleLimitedViewAll = () => {
    console.log("handleLimitedViewAll called");
    navigate("/limitedViewAll");
  };


  const handleColClick=(id)=>{
      console.log('handleColClick clicked to navigate the product details component...');
       navigate(`limitedProductDatails/${id}`)
    }

  return (
    <  >
    <Container fluid id={styles.limitedCarousel_Container}>
      <Row>
        <Col>
          <h1 className={styles.limitTitle}>Limited Deals</h1>
          <h3 className={styles.limitP}>Let's Grab the Deal</h3>
        </Col>
        <Col>
          <button onClick={handleLimitedViewAll} className={styles.viewAllbtn}>
            view all
          </button>
        </Col>
      </Row>
      <Row className={styles.limitedCarouselRow}>
        <Col >
          <Slider {...settings}>
            {data.map((item) => (
              <div className={styles.limitedSlider_container} key={item.id}>
                <div className={styles.limitedSlider_section} onClick={()=>handleColClick(item.id)}>
                  <a href="#">
                    <HomeLimitedCard
                      className={styles.limitedSlide_cards}
                      img={item.src}
                      title={item.title}
                      price={item.price}
                      finalPrice={item.finalPrice}
                      getOff={item.getOff}
                    />
                  </a>
                </div>
                
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LimitedCarousel;
