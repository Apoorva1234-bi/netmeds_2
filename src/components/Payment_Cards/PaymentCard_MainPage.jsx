import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './PaymentCard_MP.module.css'
import NextArrow from '../../assets/Images/Arrows/next.svg'

const PaymentCard_MainPage = () => {
    return (
        <>
            <Container fluid className={styles.offercontainer}>
                <Row className={styles.offerRow}>
                    <Col className={styles.offerNavBar} md={12}>
                        <div className={styles.Offerbreadcrumbs}>
                            <ul className={styles.items} type="none"> {/*need props */}
                                <li className={styles.item_offChild}><a href="https://www.netmeds.com/" title="Go to Home" className={styles.item_childoff}> Home </a> </li>
                                <li className={styles.item_offChild}><img src={NextArrow} alt="" height="10px" width="12px" className={styles.item_childoff} /></li>
                                <li className={styles.item_offChild}><a href="https://www.netmeds.com/offers" title="Go to Offers" className={styles.item_childoff}> Offers </a> </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1 className={styles.offer_title}>
                            Netmeds Coupons and Offers
                        </h1>
                    </Col>
                </Row>
            </Container>

            {/* <Container fluid>
               
            </Container> */}
        </>
    )
}
export default PaymentCard_MainPage;