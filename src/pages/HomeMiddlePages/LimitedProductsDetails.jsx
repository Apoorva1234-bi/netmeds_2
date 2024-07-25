import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function LimitedProductsDetails(props) {

    const {limitedProductId}=useParams()
    console.log("limitedProductId", limitedProductId);
    
    const navigateHome=useNavigate();
    
    const handleBack=()=>{
       console.log("handleBack cliked...");
       navigateHome('/')
    }

    return (
        <div>
            LimitedProduct details
           <button onClick={handleBack}> back to home</button>
        </div>
    );
}

export default LimitedProductsDetails;