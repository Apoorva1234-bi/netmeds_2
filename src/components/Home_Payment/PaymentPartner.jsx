import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PaymentBox from './PaymentBox';
import styles from './PaymentPartner.module.css'
import { paymentdata } from '../../assets/js/Payment';
import Example from './Example';

const PaymentPartner = () => {
    const data = paymentdata;

    console.log('data in partenre:-',data)
    return (
        <Container fluid id={styles.Home_Payment_Offer}>
            <Row>
                <h2 id={styles.Home_Payment_Offer_Row}>Payment Partner Offers
                    <span><a href="#" id={styles.viewall}>View All</a></span>
                </h2>
                <Col id={styles.Home_Payment_Offer_Col}>
                    <PaymentBox data={data}/>
                    {/* <Example data={data}/> */}
                </Col>
            </Row>
        </Container> 
    )
}
export default PaymentPartner;