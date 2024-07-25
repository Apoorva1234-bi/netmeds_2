import React from "react";
import { Col, Container, Row } from "reactstrap";
import NetmedsFooterLogo from "../assets/Images/FooterMain/NetmedsFooterLogo.svg"
import"../assets/css/FooterMain.css"

const FooterMain = () => {
    return (
        <>
            <Container className="FooterMainContainer">
                <Row className="FooterMainRow">
                    <Col xs="10" sm="5" md="3">

                        <div className="NetmedsFooterLogoImage">
                            <img src={NetmedsFooterLogo} alt="Netmeds Footer Logo Image" />

                        </div>
                    </Col>
                    <Col xs="10" sm="5" md="7">
                        <div className="NetmedsFooterLogoPara">

                            Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers – PAN India.


                        </div>

                    </Col>
                </Row>
            </Container>

        </>

    )

}

export default FooterMain;



{/* <>
<div className="NetmedsFooterMainContainer">
    <img src={NetmedsFooterLogo} alt="Netmeds Footer Logo Image " />
    <p className="NetmedsFooterMainPara">
        Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers – PAN India.
    </p>
</div>
</> */}


