import React from "react"
import { Container, Row, Col } from "reactstrap";
import "../assets/css/FooterHead.css"
import Store from "../assets/Images/FooterHead/Store.png"
import Pincodes from "../assets/Images/FooterHead/Pincodes.png"
import Customer from "../assets/Images/FooterHead/Customer.png"



const FooterHead = () => {
    return (
        <>

            <Container className="FooterHeadContainer">
                <Row className="FooterHeadRow">
                    <Col xs="12" sm="6" md="4">
                        <div className="FooterHeadBlock">
                            <div className="FooterHeadImg">
                                <img src={Store} alt="Offline Stores Image" />
                            </div >
                            <div className="FooterHeadTextBlock">
                                <h2 className="FooterHeadNumber">1000+</h2>
                                <h4 className="FooterHeadText">Offline Stores</h4>


                            </div>

                        </div>

                    </Col>

                    <Col xs="12" sm="6" md="4">
                        <div className="FooterHeadBlock">

                            <div  className="FooterHeadImg">
                                <img src={Pincodes} alt="Pincodes Served Image" />
                            </div>
                            <div className="FooterHeadTextBlock">
                                <h2 className="FooterHeadNumber">20000+</h2>
                                <h4 className="FooterHeadText">Pincodes Served</h4>
                            </div>
                        </div>

                    </Col>

                    <Col xs="12" sm="6" md="4">
                        <div className="FooterHeadBlock">
                            <div  className="FooterHeadImg">
                                <img src={Customer} alt="Happy Customers Image" />
                            </div>
                            <div className="FooterHeadTextBlock">
                                <h2 className="FooterHeadNumber">9M+</h2>
                                <h4 className="FooterHeadText">Happy Customers</h4>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default FooterHead;