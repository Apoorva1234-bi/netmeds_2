import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OffersChild.module.css'
import NextArrow from '../../assets/Images/Arrows/next.svg'
import OffersChildDetails from './OfferChildDeatils';



const OfferChild = () => {
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
                                <li className={styles.item_offChild}><img src={NextArrow} alt="" height="10px" width="12px" className={styles.item_childoff} /></li>
                                <li className={styles.item_offChild}><span className={styles.item_childoff}>Get Flat 20% OFF* On Medicines</span> </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.OfferDetails}>
                    <Col className={styles.OfferTop} md={12}>
                        <a href="/#">
                            <img fluid className={styles.detailsImage}
                                src="https://www.netmeds.com/images/cms/offers/1714646115_Web_Landing_Banner.jpg" alt="" /></a>{/*need props */}
                    </Col>
                    <Col className={styles.OfferCoupondeatils}>
                        <div className={styles.offer_code_section}>
                            <p className={styles.couponNumber}>NMSNEW</p>{/*need props */}
                            <p className={styles.couponCode}>Coupon Code</p>{/*need props */}
                        </div>
                        <div className={styles.copycode}>
                            <button className={styles.offerCouponButton}>COPY code</button>
                        </div>
                    </Col>
                    <Col className={styles.hrtag} md={12}>
                        <hr className={styles.offerHrline} />
                    </Col>
                    <Col className={styles.offer_bottom}>
                        <span className={styles.offer_valid}>VALID TILL 31 Jul 2024</span>
                    </Col>
                </Row>
            </Container>

            {/*Deatils for Offer Page: make anoither COntainer */}
            <OffersChildDetails/>
        </>

    )

}

export default OfferChild;