import React from 'react'
import styles from './Home_TopCarousele.module.css'
import Home_TopCarousele_1 from '../../assets/Images/homePage/img1.jpg';
import Home_TopCarousele_2 from '../../assets/Images/homePage/img2.jpg';
import Home_TopCarousele_3 from '../../assets/Images/homePage/img3.jpg';
import Home_TopCarousele_4 from '../../assets/Images/homePage/img4.jpg';
import Home_TopCarousele_5 from '../../assets/Images/homePage/img5.jpg';
import Home_TopCarousele_6 from '../../assets/Images/homePage/img6.gif';
import Home_TopCarousele_7 from '../../assets/Images/homePage/img7.jpg';
import Home_TopCarousele_8 from '../../assets/Images/homePage/img8.jpg';

import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Home_TopCarousele = () => {

    return (
        <>
            <Container fluid id={styles.home_banner} >
                <Row id={styles.home_slides} >
                    <Col id={styles.home_slides_content} lg={12}>
                        <Carousel className='Home_container' >
                            <Carousel.Item >
                                <img src={Home_TopCarousele_1} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item >
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_2} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_3} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_4} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_5} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_6} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_7} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src={Home_TopCarousele_8} alt="Carousel 1" className="d-block w-100 img-fluid" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>

    )

}
export default Home_TopCarousele;

