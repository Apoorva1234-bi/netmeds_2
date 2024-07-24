import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OffersChild.module.css'
import { offerchilddetail } from '../../assets/js/OfferChildDetails';
import OfferChildTermsandCondition from './OfferChildTermsandCondition';

const OffersChildDetails = () => {

    const data = offerchilddetail;
    return (
        <Container fluid className={styles.offerdetailcontainer}>
            <Row className={styles.Offerinfo}>
                <Col className={styles.info_txt}>
                    <h1>FLAT 25% OFF on Your First Meds* Order + 25% NMS SuperCash*</h1> {/*pass as Props */}
                    <div className={styles.info_txt_details}>
                        Till 31st July 2024, get Flat 25% OFF* (max discount: Rs 700) on Your First Pre-Paid/COD Medicine order,
                        AND upon delivery, a 25% NMS SuperCash* (max cashback: Rs. 1000) on 'pre-paid' medicine order. *Minimum order of
                        medicines (along with ANY other products) required: Rs 1249. *T&amp;C
                    </div>
                </Col>
            </Row>
            {/*Offers Details Information */}
            {data.map((item) => (
                <Row className={styles.Offerinfo} key={item.id}>
                    <Col className={styles.info_txt} >
                        <span>{item.title}</span>
                        <div className={styles.info_txt_details}>
                            {item.detail}
                        </div>
                    </Col>
                </Row>
            ))
            }

             {/*Offers Details Tersm & Conditions */}

            <Row>
                <OfferChildTermsandCondition/>
            </Row>
        </Container>
    )
}

export default OffersChildDetails;