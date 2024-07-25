import React, {useState} from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import GooglePlay from "../assets/Images/FooterContainer/GooglePlay.png"
import AppStore from "../assets/Images/FooterContainer/AppStore.png"
import "../assets/css/FooterContainer.css"
import { Col, Container, Row } from "reactstrap";
import Send from "../assets/Images/FooterBottom/Send.png"

const FooterContainer = () => {
      
    const [email,setEmail] = useState();
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

     const handleClick = () => {
        setEmail();
     }
    return (
        <>
            <Container className="FooterContainerMain">
                <Row>
                    <Col md = "9">
                   
                <BrowserRouter className="BrowserRouterContainer">
                   

                     {/* COMPANY */}
                        <div className="FooterContainerLinkBlock">
                            <h5 className="FooterContainerLinkTitle">COMPANY</h5>
                            <ul className="FooterContainerLinks">
                                <li><Link to="/aboutnetmeds" className="Links"> About Netmeds </Link></li>
                                <li><Link to="/customerspeak" className="Links"> CustomerSpeak </Link></li>
                                <li><Link to="/inthenews" className="Links"> In the News </Link></li>
                                <li><Link to="/career" className="Links"> Career </Link></li>
                                <li><Link to="/contact" className="Links"> Contact</Link></li>
                            </ul>

                        </div>

                        {/* Our Policies */}
                        <div  className="FooterContainerLinkBlock">
                            <h5 className="FooterContainerLinkTitle">OUR POLICIES</h5>
                            <ul className="FooterContainerLinks">
                                <li><Link to="/termsandconditions"  className="Links">Terms And Conditions</Link></li>
                                <li><Link  to="/privacypolicy" className="Links">Privacy Policy</Link></li>
                                <li><Link  to="/feesaandpayments" className="Links">Fees And Payments Policy</Link></li>
                                <li><Link  to="/shippinganddeliverypolicy" className="Links">Shipping And Delivery Policy</Link></li>
                                <li><Link  to="/returnrefundandcancellation" className="Links">Return,Refund And Cancellation Policy</Link></li>
                                <li><Link  to="/editorialpolicy" className="Links">Editorial Policy</Link></li>

                            </ul>
                        </div>


                        {/* SHOPPING */}
                        <div className="FooterContainerLinkBlock">
                            <h5 className="FooterContainerLinkTitle">SHOPPING</h5>
                            <ul  className="FooterContainerLinks">
                                <li><Link to="/browserbyatoz" className="Links">Browse By A-Z</Link></li>
                                <li><Link to="/barowserbymanufactores" className="Links">Browser By Manufacturers</Link></li>
                                <li><Link to="/healtharticals" className="Links">Health Articals</Link></li>
                                <li><Link to="/coupens" className="Links">Offers / Coupons</Link></li>
                                <li><Link to="/faqs" className="Links">FAQs</Link></li>
                            </ul>
                        </div>


                    {/* POPULAR CATEGORES */}
                        <div  className="FooterContainerLinkBlock">
                            <h5 className="FooterContainerLinkTitle">POPULAR CATEGORES</h5>
                            <ul  className="FooterContainerLinks">
                                <li><Link to="/ayush" className="Links">Ayush</Link></li>
                                <li><Link to="/devices" className="Links">Devices</Link></li>
                                <li><Link to="/familycare" className="Links">Family Care</Link></li>
                                <li><Link to="/fitness" className="Links">Fitness</Link></li>
                                <li><Link to="/lifestyle" className="Links">Lifestyle</Link></li>
                                <li><Link to="/personalcare" className="Links">Personal Care</Link></li>
                                <li><Link to="/treatments" className="Links">Treatments</Link></li>
                                <li><Link to="/beauty" className="Links">Beauty</Link></li>
                            </ul>
                        </div>


                        {/* SOCIAL */}
                        <div  className="FooterContainerLinkBlock">
                            <h5 className="FooterContainerLinkTitle">SOCIAL</h5>
                            <ul  className="FooterContainerLinks">
                                <li><Link to="/patientsalike" className="Links"> Patients Alike</Link></li>
                                <li><Link  to="/facebook" className="Links"> Facebook</Link></li>
                                <li><Link  to="/twitter" className="Links"> Twitter</Link></li>
                                <li><Link  to="/linkenin" className="Links"> LinkendIn</Link></li>
                                <li><Link  to="/instagram" className="Links"> Instagram</Link></li>
                                <li><Link  to="/youtube" className="Links"> Youtube </Link></li>
                                <li><Link  to="/refernearn"className="Links"> Refer & Earn </Link></li>
                            </ul>
                        </div>


               </BrowserRouter>
                </Col>  



                {/* SUBSCRIBE TO OUR NEWSLETTER */}
                <Col md = "3">
                <div  className="FooterContainerSubscribeBlock">
                    <h5 className="SubscribeTitle">SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <p className="SubscribePara">
                        Get a free sunscription to our health and fitness 
                         tip and stay turned to our latest offer
                    </p>

                  <form>
                    <input type="email" name="email" placeholder="Enter Your Email Adress" required onChange={handleEmailChange} className="SubscribeInput" />
                    <img src={Send} alt="" className="SubscribeButton"/>
                    
                    {/* <button type= "submit" onClick={handleClick}>Sub</button> */}
                   {/* <Link to="/subscribe"> <button>Subscribe</button></Link> */}
                   {/* <input type="submit" value="Sub" /> */}
                   </form>
                 

                  <div className="SubscribeImages">
                    <img src={GooglePlay} alt="Google Play Image" height="40px" className="SubscribeImg"/>
                    <img src={AppStore} alt="App Store Image" height="40px" className="SubscribeImg"/>
                  </div>

                </div>
           

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FooterContainer;