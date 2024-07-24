import React from 'react';
import CardComponent from './CardComponent.jsx';
import limitedItems from "../../assets/js/Komal.js";
import styles from './Komal.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';


const LimitedCarousel = (props) => {
    //  const {limitedItems} = props;

    const data = limitedItems;

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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container fluid id={styles.limitedCarousel_Container}  >
            <Row>
                <h1>Limited Deals</h1>
                <h3>Lets Grab</h3>
            </Row>
           <Row className={styles.limitedCarouselRow}>
            <Slider {...settings}>
              {data.map((item) => (
                           <Col className={styles.limitedSlider_container} key={item.id} >
                                <div className={styles.limitedSlider_section}>
                                    {/* <a href=""> */}
                                    <CardComponent className={styles.limitedSlide_cards}
                                            img={item.src}
                                            title={item.title}
                                            price={item.price}
                                            finalPrice={item.finalPrice}
                                            getOff={item.getOff}
                                            />
                                        
                                        {/* </a>                                         */}
                                        
                                </div>
                            </Col>
                    ))
                }
            </Slider>
            </Row>



{/* 
            <Slider {...settings}>
                {
                    limitedItems.map((item) => (
                        <Row className={styles.limitedCarouselRow}>

                            <Col className={styles.limitedSlider_container} key={item.id} md={4} sm={6} xs={12}>
                                <Col className={styles.limitedSlider_section}>

                                    <a href='#'>
                                        <CardComponent className={styles.limitedSlide_cards}
                                            img={item.src}
                                            title={item.title}
                                            price={item.price}
                                            finalPrice={item.finalPrice}
                                            getOff={item.getOff}
                                        />

                                    </a>
                                </Col>

                            </Col>
                        </Row>

                    ))
                }

            </Slider> */}

        </Container>
    )
}
export default LimitedCarousel;