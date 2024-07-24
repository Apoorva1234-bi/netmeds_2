import React from 'react'
import styles from './PaymentBox.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from 'react-bootstrap';

const PaymentBox = (props) => {
    const { data } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,  // Ensure this property is set to true
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
        <div id={styles.PaymentBox_Container}>
            <Slider {...settings}>
                {data.map((item) => (
                    <Col className={styles.slider_container} key={item.id} md={4} sm={6} xs={12}>
                        <div className={styles.slider_section}>
                            <a href="#">
                                <img src={item.img} />
                                <div className={styles.slide_description}>
                                    <h3 className={styles.ellipsis}>
                                        <b>{item.title}</b>
                                        <p>{item.content}</p>
                                    </h3>
                                </div>
                            </a>
                        </div>
                    </Col>
                ))
                }
            </Slider>
        </div>

    )
}

export default PaymentBox;