import React from 'react'
import  Accordion  from 'react-bootstrap/Accordion';
import styles from './OffersChild.module.css'
import styled from 'styled-components';

const CustomAccordionHeader = styled.div`
  .accordion-button:not(.collapsed) {
    background-color: #ffffff; /* Set background color to white */
    border:none;
    box-shadow: #ffffff !important;
  }
`;


const OfferChildTermsandCondition = () => {
    return (
    <CustomAccordionHeader>
        <Accordion defaultActiveKey="0" className={styles.accordContainer}>
            <Accordion.Item eventKey="0" className={styles.accordItem}>
                <Accordion.Header className={styles.accordHeader} >
                    <h5 className={styles.accordTitle}>Terms and Conditions</h5>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={styles.offer_terms_and_conditions}>
                        <div className={styles.TC_info}>
                            <h2>FLAT 22% Off Medicines: Offer Outline</h2>
                            <p>
                                <span>Subject to the following Terms and Conditions, ALL customers will be eligible to receive a Flat 22%
                                    discount (max. Rs. 1800) immediately on a 'Pre-Paid/COD' order of Medicines, placed on Netmeds.com/Netmeds App.
                                    NOTE: A minimum order of medicines (along with ANY other products) worth Rs. 1499 is required to be eligible for the Flat
                                    22% discount on medicines. The coupon code for this offer is BIG22, which can be used multiple times during the offer period.
                                </span>
                            </p>
                        </div>

                        <div className={styles.TC_info}>
                            <h2>How the Offer Works:</h2>
                            <p><span >Step 1:</span><span> Place your medicine
                                order using the Coupon Code BIG22. NOTE: A minimum order of medicines (along with ANY
                                other products) worth Rs. 1499 is required to be eligible for the Flat 22% discount on
                                medicines.</span></p>
                            <p><span >Step 2:</span><span > You get an immediate
                                22% discount (max. Rs. 1800) on medicines.</span></p>
                            <p><span>Step 3:</span><span>&nbsp; Upload your
                                Prescription and fill in the Shipping details.</span></p>
                            <p><span>Step 4:</span><span > Review &amp; complete
                                the order.</span><span ></span></p>
                        </div>

                        <div className={styles.TC_info}>
                            <h2>Terms and Conditions - Flat 22% OFF on Medicines</h2>
                            <h3>Coupon Code:</h3>
                            <p><b>BIG22</b></p>
                        </div>

                        <div className={styles.TC_info}>
                            <h2>Offer Includes:<span></span></h2>
                            <p><span >A FLAT 22% discount* (max Rs. 1800) on Pre-Paid/COD order of all
                                Medicines ONLY (code BIG22). </span><i><span >To get a flat 22%
                                    discount on Medicines,</span></i> <i><span>a minimum
                                        order of Rs. 1499 worth of medicines (along with ANY other products) is
                                        required.</span></i></p>
                            <p><span >NOTE: Under this offer, the coupon code BIG22
                            </span><b>cannot</b><span > be combined with '</span><b>selected'
                                e-voucher codes</b><span >.</span></p>
                            <p><span >Some of the selected medicines are ONLY eligible for max. 10%
                                discount.</span>
                            </p>
                        </div>

                        <div className={styles.TC_info}>
                            <h2>Offer Details:</h2>
                            <ul className={styles.listofTC}>
                                <li aria-level="1"><span s>*The maximum
                                    discount on medicines per order transaction is capped at Rs. 1800.</span></li>
                                <li aria-level="1"><span >The coupon code
                                    BIG22 must be applied at the shopping cart page to get a FLAT 22% discount on
                                    Medicines.</span></li>
                                <li aria-level="1"><span>The BIG22 coupon
                                    code can be used as many times as you want during the offer period.</span></li>
                                <li aria-level="1"><span>The flat 22%
                                    discount is valid on either Pre-paid or COD (Cash on Delivery) medicine
                                    orders.</span></li>
                                <li aria-level="1"><span >If the order has
                                    both prescription medicines and non-prescription products, then the Flat 22%
                                    discount will be applicable on the total value of the prescription medicines
                                    ONLY (excluding ALL Ayurvedic medicines, OTC &amp; FMCG products).</span></li>
                                <li aria-level="1"><span >This offer is also
                                    NOT applicable on ALL Ayurvedic medicines, over-the-counter and FMCG
                                    products.</span></li>
                                <li aria-level="1"><span >This offer is good
                                    for Existing as well as New Customers.</span></li>
                                <li aria-level="1"><span >This offer cannot
                                    be combined with other existing offers.</span></li>
                                <li aria-level="1"><span >This offer is valid
                                    on orders placed via Netmeds.com website or Netmeds app.</span></li>
                                <li aria-level="1"><span >Regular shipping
                                    charges will apply on ALL orders where the NMS SuperCash is redeemed.</span>
                                </li>
                                <li><span>Shipping charges for order value of up to Rs. 199 is Rs. 69, charges for order value
                                    worth more than 199 and up to Rs. 499 is Rs. 49, charges for order value worth
                                    more than Rs. 499 and up to Rs. 999 is Rs. 29, charges for order value more than
                                    999 and up to Rs 1999 is Rs. 19 and charges for order value worth more than Rs.
                                    1999 is Rs. 9.</span></li>
                                <li><span>For Netmeds First Members the minimum order required to avail FREE Shipping is Rs. 99.
                                </span></li>
                                <li><span>For Netmeds First Members Shipping charges for order value of up to Rs. 98.99 is Rs.
                                    35.</span></li>
                                <li aria-level="1"><span >This offer cannot
                                    be applied to previous purchases.</span></li>
                                <li aria-level="1"><span >This offer is not
                                    redeemable for cash or credit, and cannot be exchanged for any other
                                    product.</span></li>
                                <li aria-level="1"><span >Select medicines
                                    will receive a flat 30% discount and these medicines will not be eligible for
                                    any further discount when any discount code is applied.</span></li>
                            </ul>
                        </div>

                        <div className={styles.TC_info}>
                            <p><b>Other Terms and Conditions</b></p>
                            <ul className={styles.listofTC}>
                                <li aria-level="1">
                                    <span>
                                        This offer is non-negotiable and non-binding.</span></li>
                                <li aria-level="1"><span >This offer will
                                    become null and void in the event that an order placed using the promotional
                                    coupon code is cancelled.</span></li>
                                <li aria-level="1"><span >Netmeds.com
                                    reserves the right to cancel, change or substitute this offer at any time
                                    without prior notice and the same is at the sole discretion of the
                                    company.</span></li>
                                <li aria-level="1"><span >Netmeds.com is not
                                    responsible for any failed transactions as part of this offer NOR liable for any
                                    failures relating to technical, hardware, software, server, website, or other
                                    issues of any kind to the extent that these may prevent the Customer from
                                    participating in this offer.</span></li>
                                <li aria-level="1"><span >Netmeds.com
                                    decision shall be final and binding in all respects with respect to the matters
                                    relating to the offer.</span></li>
                                <li aria-level="1"><span >The offer shall be
                                    governed by and construed in all respects in accordance with the laws of India
                                    subject to the jurisdictional courts of Chennai.</span></li>
                                <li aria-level="1"><span >By availing this
                                    offer, it is deemed that the customer has agreed to all the terms &amp;
                                    conditions mentioned herein.</span></li>
                            </ul>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </CustomAccordionHeader>
    )

}
export default OfferChildTermsandCondition;