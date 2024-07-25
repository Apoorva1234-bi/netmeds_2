import React from "react"
import { Container, Row, Col } from "reactstrap";
import GooglePay from "../assets/logo/GooglePay.svg"
import MasterCard  from "../assets/logo/MasterCard.svg"
import Paytm from "../assets/logo/Paytm.svg"
import PhonePay from "../assets/logo/PhonePay.svg"
import RuPay from "../assets/logo/RuPay.svg"
import Simpl from "../assets/logo/Simpl.svg"
import Visa  from "../assets/logo/Visa.svg"
import "../assets/css/FooterBottom.css"


const FooterBottom = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
               <div className="PaymentPartnerBlock">
               <div>
                    <h5 className="PaymentHeading">OUR PAYMENT PARTENERS</h5>
                </div>
                <div className="PaymentImages">
                    <img src={GooglePay} alt="GooglePay Logo" />
                    <img src={PhonePay} alt="PhonePay" />
                    <img src={Paytm} alt="Paytm" />
                    <img src={RuPay} alt="RuPay" />
                    <img src={Simpl} alt="Simpl" />
                    <img src={Visa} alt="Visa" />
                    <img src={MasterCard} alt="MasterCard" />
                </div>
               </div>
               
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="FooterLinks">
                      <li>Medicine</li>
                      <li>Wellness</li>
                      <li>Lab Tests</li>
                      <li>Beauty</li>
                      <li>Copyright@2023.All Rights Reserved</li>
                </div>
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FooterBottom;