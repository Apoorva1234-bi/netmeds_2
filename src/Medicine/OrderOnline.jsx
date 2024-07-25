import React from "react";
import OrderOnlineCarousol from "../OrderOnlineCarousol";
import ShopByCategory from "../ShopByCategory";
import HealthConserns from "../HealthConserns";
import ProductList from '../ProductList';
import PopularPicks from '../PopularPicks'


const products = [
  {
      name: 'Truuth Ashwagandha 500mg Capsule 60\'S',
      price: 149.75,
      discount: 75,
      image: 'path/to/image1.jpg'
  },
  {
      name: 'INLIFE Ashwagandha Ghan Capsules 60\'S',
      price: 379.24,
      discount: 24,
      image: 'path/to/image2.jpg'
  },
  {
      name: 'Kapiva Himalayan Shilajit Resin 20 Gm',
      price: 998.33,
      discount: 33.4,
      image: 'path/to/image3.jpg'
  },
  {
      name: 'Disprin Regular Effervescent Tablet 10\'S',
      price: 11.09,
      discount: 1,
      image: 'path/to/image4.jpg'
  },
  {
      name: 'Saridon Advance Tablets For 5 In 1 Pain Relief 10\'S',
      price: 44.10,
      discount: 10,
      image: 'path/to/image5.jpg'
  }
];

const App = () => {
  return (
      <div>
          <h1>Popular Picks</h1>
          <ProductList products={products} />
      </div>
  );
};
function OrderOnline() {
  return (
    <>
      <h1>Order Medicine Online</h1>
      
      <hr />
      <div style={{ display: "flex",justifyContent:'space-evenly' }}>
        <div style={{ display: "flex" ,marginRight:'500px'}}>
          <img
            src="/OrderOnline/tablets.png" alt="" height={"80"} width={"73.75"}/>
          <div>
            <h2>Upload prescription</h2>
            <pre>
              Just upload the photo of your prescriptions and get medicines 
              delivered to you
            </pre>

            <span id="large-button1">
              <img src="" alt="" />
              <a href="" target="_blank">
                <button className="underline1">Update Now</button>
              </a>
            </span>
          </div>
        </div>

        <div class="vl"></div>

        <div style={{ display: "flex" ,marginLeft:'100px'}}>
          <div>
            <img
              src="/OrderOnline/doc-consult.png"
              alt=""
              height={"73"}
              width={"73"}
            />
          </div>

          <div id="consult">
            <h2> No Prescription? No <br /> Problem</h2>
            <pre>Get a free doctor consultation</pre>

            <span id="large-button2">
              <img src="" alt="" />
              <a href="" target="_blank">
                
          
                <button className="underline2">Consult Doctor</button>
              </a>
            </span>
          </div>
        </div>
      </div>


      <div style={{marginTop:'1pc'}}>  <hr /></div>
    
      <div>

        
        <ShopByCategory />
      </div>
      <div>


        <OrderOnlineCarousol />











       </div>



       <div> <HealthConserns /></div>
       <div> <h2>Popular Picks</h2>
       <PopularPicks/></div>






    <div className="membershipContainer">
      <div className="icon">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRDxVUTCW04Vo0ZrOkkSHmRrRvFpKVEPJVf9_2jPV1WNP3gW30" alt="Membership Icon" />
      </div>
      <div className="details">
        <h2>Netmeds First Membership</h2>
        <p>Get special discounts and offers on Netmeds services.<br />
           Get 2% NMS Cash on all orders.<br />
           Get unlimited free delivery.</p>
      </div>
      <div className="price">
        <span>Starting at ₹149</span>
      </div>
      <div className="action">
        <button >Explore Plans</button>
      </div>
    </div>








       <div id="information">
         <h2>Order Medicine Online</h2>
         <p>
           Welcome to our one-stop destination for ordering medicines
           online.Explore the convenience of browsing and purchasing both
           prescription and non-prescription medicines from the comfort of your
           home.
         </p>

         <h3>Benefits of Ordering Medicine Online</h3>
         <ul>
           <li>
             <strong>Convenience:</strong> Order your medicines anytime,
             anywhere, and receive them at your doorstep.
           </li>
           <li>
             <strong>Access to Information:</strong> Detailed information about
             each medication, including uses and benefits, is just a click away.
           </li>
           <li>
             <strong>Wide Range of Medications:</strong> From common
             over-the-counter drugs to prescription medications, we've got you
             covered.
           </li>
         </ul>

         <h2 >How It Works</h2>
         <ol>
           <li>
             <strong>Browse Medicines:</strong> Easily navigate through our
             user-friendly interface to find the medicines you need.
           </li>
           <li>
             <strong>View Information:</strong> Click on any medication to access
             detailed information about its uses, benefits, and directions for
             use.
           </li>
           <li>
             <strong>Add to Cart:</strong> Click on any medication to add it to
             your cart for easy and convenient shopping.
           </li>
           <li>
             <strong>Checkout:</strong> Provide your details, choose a payment
             method, and complete your order.
           </li>
           <li>
             <strong>Doorstep Delivery:</strong> Sit back and relax as your
             medicines are delivered to your doorstep.
           </li>
         </ol>
       </div>
       <h2 >
         Netmeds, Trusted Online Medical Store by Millions
       </h2>
       <p>
         When it comes to online pharmacies, Netmeds stands out as a trusted and
         reliable choice for millions of customers. Our commitment to quality,
         authenticity, and customer satisfaction has made us a preferred online
         medical store. Here's why Netmeds is the go-to platform for your
         healthcare needs:
       </p>
       <h3>Trusted by Millions</h3>
       <ul>
         <li>
           <strong>Years of Experience:</strong> With years of experience,
           Netmeds has established itself as a pioneer in the online pharmacy
           industry.
         </li>
         <li>
           <strong>Quality Assurance:</strong> We source our medications from
           certified pharmacies to ensure their authenticity and quality.
         </li>
       </ul>
       <h3>Why Choose Netmeds?</h3>
       <ul>
         <li>
           <strong>Wide Product Range:</strong> Find an extensive range of
           medicines, healthcare products, and wellness essentials.
         </li>
         <li>
           <strong>Easy Navigation:</strong> Our website is designed for easy
           navigation, making your online shopping experience seamless.
         </li>
         <li>
           <strong>Secure Transactions:</strong> Rest easy knowing that your
           transactions are secure and your data is protected.
         </li>
       </ul>
       <h3>How to Order Medicine Online?</h3>
       <p>
         At Netmeds, we host a comprehensive range of medicines from A to Z. You
         can effortlessly find the products you need by searching our platform.
         Please be aware that certain medications may require a prescription. If
         you have a valid prescription, you can easily upload it during the
         purchase process. However, if you don't have a prescription, don't
         worry! Netmeds provides the convenience of consulting a doctor online to
         obtain a valid prescription. For personalized assistance with ordering
         your medicines, feel free to give us a call at 7200712345. Our team is
         ready to guide you through the process and ensure a seamless and
         hassle-free experience. Trust Netmeds for all your healthcare needs.
       </p>
       <h2 >Top Cities in India</h2>
       <p>
         Mumbai | Bangalore | Delhi | Hyderabad | Chennai | Patna | Pune | Indore
         | Kolkata | Lucknow
       </p>
       <h3 >Frequently Asked Questions</h3>
       <h3 >
         Can I purchase prescription medicines online?
       </h3>
       <p>
         Yes, Netmeds allows you to purchase both prescription and
         non-prescription medicines.
       </p>
       <h3 >How do I track my order?</h3>
       <p>
         Once your order is confirmed, you can track its status in your order
         history from My Accounts section.
       </p>
       <h3 >Are the medicines authentic?</h3>
       <p>
         Absolutely. We source our medicines from reputable and certified
         pharmacies to ensure authenticity.
       </p>
       <h3 >What payment methods are accepted?</h3>
       <p>
         We accept a variety of payment methods, including UPI, credit/debit
         cards, and online wallets. We also accept cash on delivery.
       </p>
    </>
   );
 }

export default OrderOnline;
