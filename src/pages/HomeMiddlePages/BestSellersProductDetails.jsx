import React from 'react';
import { useNavigate } from 'react-router-dom';

function BestSellersProductDetails(props) {

    
    const navigate =useNavigate();

    const {bestSellerProductId}=useParams();
    console.log("bestSellerProductId :-", bestSellerProductId);
      
    const handleBestSellersDetailsBack=()=>{
        console.log("handlebestSellersDetailsBack called....");
        navigate('/');
    }

    return (
        <div>
            <h3>BestSellersProductDetails
           </h3>
           <button onClick={handleBestSellersDetailsBack}>Back to Home</button>

        </div>
    );
}

export default BestSellersProductDetails;