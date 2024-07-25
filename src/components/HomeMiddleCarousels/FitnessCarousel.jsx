// import React, { useState } from "react";
// import { CarouselControl, Container, Row, Col } from "reactstrap";
// import CardComponent from "../Cards/CardComponent";
// import fitnessItems from "../../assets/js/fitnessItems";

// import styles from "../../assets/css/fitnessCarousel.module.css";
// import { useNavigate } from "react-router-dom";

// const FitnessCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [isSliding, setIsSliding] = useState(false);
//   const itemsPerSlide = 5;

//   const navigate = useNavigate();

//   const next = () => {
//     if (isSliding) return;
//     if (startIndex < fitnessItems.length - itemsPerSlide) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const previous = () => {
//     if (isSliding) return;
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   const handleFitnessView = () => {
//     console.log("handleFitnessView");
//     navigate("/fitnessViewAll");
//   };

//   const slides = fitnessItems
//     .slice(startIndex, startIndex + itemsPerSlide)
//     .map((item, index) => (
//       <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
//         <CardComponent
//           img={item.src}
//           title={item.title}
//           price={item.prize}
//           finalPrice={item.finalPrice}
//           getOff={item.getOff}
//         />
//       </Col>
//     ));

//   return (
//     <Container fluid className={styles.fitnessBody}>
//       <Row>
//         <Col>
//           <h3 className="LimitTitle">Fitness Upto 50% Off</h3>
//         </Col>
//         <Col
//           style={{
//             padding: "10px",
//             display: "inline-block",
//             marginLeft: "300px",
//           }}
//         >
//           <button onClick={handleFitnessView}>view all</button>
//         </Col>
//       </Row>
//       <Row className={styles.carouselRow}>{slides}</Row>
//       <Col xs="auto">
//         <CarouselControl
//           direction="prev"
//           directionText="Previous"
//           onClickHandler={previous}
//           disabled={startIndex === 0}
//         />
//       </Col>
//       <Col></Col>
//       <Col xs="auto">
//         <CarouselControl
//           direction="next"
//           directionText="Next"
//           onClickHandler={next}
//           disabled={startIndex >= fitnessItems.length - itemsPerSlide}
//         />
//       </Col>
//     </Container>
//   );
// };

// export default FitnessCarousel;


// ---------------------------------------------------------

// ----------------------------------------------------------------------

import React from "react";

import fitnessItems from '../../assets/js/HomeMiddleCarouselsJs/fitnessItems.js'
import styles from "./limitedCarousel.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeLimitedCard from "../HomeMiddleCards/HomeLimitedCard.jsx";

const FitnessCarousel = () => {

  const fitnessData = fitnessItems;

const navigate=useNavigate()

  const fitnessSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        fitnessSettings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        fitnessSettings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        fitnessSettings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleFitnessViewAll = () => {
    console.log("handleFitnessViewAll called");
    navigate("/fitnessViewAll");
  };

  const handleColClick=(id)=>{
    console.log('handleColClick clicked to navigate the product details component...');
     navigate(`fitnessProductDatails/${id}`)
  }

  return (
    <>
    <Container fluid className={styles.fitnessCarousel_Container}>
      <Row>
       
      <Col>
           <h3 className={styles.limitTitle}>Fitness Upto 50% Off</h3>
         </Col>
        <Col>
          <button onClick={handleFitnessViewAll} className={styles.fitnessViewAllbtn}>
            view all
          </button>
        </Col>
      </Row>
      <Row className={styles.limitedCarouselRow}>
        <Col>
          <Slider {...fitnessSettings}>
            {fitnessData.map((item) => (
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

export default FitnessCarousel;
