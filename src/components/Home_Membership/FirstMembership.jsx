import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './FirstMembership.module.css'
import FMImage from '../../assets/Images/FMembership/Image1.gif'
import Flash from '../../assets/Images/FMembership/flash.png'

const FirstMembership = () => {

    return (
        <Container fluid id={styles.FMcontainer}>
            <Row className={styles.FMRow}>
                <Col className={styles.FMCol}>
                    <div className={styles.FMImage}>
                        <img src={FMImage} alt="" className={styles.FMImg}/>
                    </div>
                    <div className={styles.FMContent}>
                        <div className={styles.firstmember}>
                            <h2>Netmeds First Membership</h2>
                            <ul type="none" className={styles.UnList}>
                                <li className={styles.ListItem}>Get special discounts and offers on Netmeds services.</li>
                                <li className={styles.ListItem}>Get 2% NMS Cash on all orders.</li>
                            </ul>
                        </div>
                        <div className={styles.pricinginfo}>
                            <div className={styles.start_msg}>
                                <img src={Flash} alt="" />
                                Starting at 149
                            </div>
                            <div className={styles.Exploreplan}>
                                <a href="#" ><b>Explore Plans</b></a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}
export default FirstMembership;