import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OBW.module.css'
import OBW_Child from './OBW_Child';
import Wellnessnew from '../../assets/Images/Homepage_OBW/Wellnessnew.svg'
import Beautynew from '../../assets/Images/Homepage_OBW/Beautynew.svg'
import Ordermedicinnew from '../../assets/Images/Homepage_OBW/ordermedicinnew.svg'


const OBW = () => {
    return (
        <Container fluid id={styles.section_143}>
            <Row id={styles.new_catagory_sbilabhide}>
                <Col className={styles.top_category} md={3} sm={12} xs={12}>
                    <OBW_Child className={styles.top_category} img={Wellnessnew}
                     heading="Order Medicine" save_text="Save Upto 25% off" 
                    />
                </Col>
                <Col className={styles.top_category} md={3} sm={12} xs={12}>
                    <OBW_Child img={Beautynew} heading="Beauty" save_text="Save Upto 40% off" />
                </Col>
                <Col className={styles.top_category} md={3} sm={12} xs={12}>
                    <OBW_Child img={Ordermedicinnew} heading="Wellness" save_text="Save Upto 60% off" />
                </Col>
            </Row>
        </Container>
    )
}

export default OBW;