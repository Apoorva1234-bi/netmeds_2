import React from "react";


function BuyAgain() {
  return (
    <>
      <div class="flex-container">

        <div class="item">
          <img
            src="public\OrderOnline\buyAgain.png"
            alt=""
            width="488px"
            height="510px"
          />
        </div>

        <div class="item">
          <h1>Sign In / Sign Up</h1>
        <p id="para"> Sign up or Sign in to access your orders, special offers,<br /> health
        tips and more!</p>
           
        

          <h6 style={{color:"#17a2b8 " }}>PHONE NUMBER</h6>
          <div >
          <input className="number"
            type="tel"
            class="form-control"
            placeholder="+91| Enter your phone number"
          />
          </div>
         

          <div>
           <button className="large-button">USE OTP</button>
          </div>


<div id="link">  
    <div className="border" >
   
            <img src="public\OrderOnline\google-icon.png" alt="" style={{width:"1.5rem",}} />
        
            <a href="https://www.google.com" target="_blank" className="sublink">
            <span>Google</span>
            </a>
          
</div>
          <div  className="border">
            <img src="public\OrderOnline\facebook-icon.png" alt="" style={{width:"1.5rem"}}/>
            <a href="https://www.facebook.com" target="_blank"  className="sublink">
            <span>Facebook</span>
            </a>
          </div></div>
      


{/*      
                                <div class="card flex justify-content-center">
                                    <p-button styleClass="p-button-outlined">
                                        <img alt="logo" src="assets/labtest/facebook.jpg" style="width: 1.5rem" />
                        
                                        <a class="atag" href="https://www.facebook.com/" target="_blank">
                                            <span class="ml-2 font-bold">Facebook</span>
                    
                                        </a>
                                    </p-button>
                                </div> */}

{/* 



          <div className="">
                                    <p-button styleClassName="p-button-outlined">
                                        <img alt="logo" src="public\OrderOnline\google-icon.png" style="width: 1.5rem" />
                                       
                                        <a className="atag" href="https://www.google.com/" target="_blank">
                                            <span className="ml-2 font-bold">Google</span>
                    
                                            <div className="my-class">Content</div>

                                        </a>
                                    </p-button>
              
              
                                </div> */}
        </div>
        
      </div>
      

      <pre id="buttom">
        By continuing you agree to our <span className="color">Terms of service</span>  <br />
         and <span className="color">Privacy & Legal Policy.</span>
      </pre>
    </>
  );
}

export default BuyAgain;
