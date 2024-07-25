import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewArrivalProductDetails(props) {
    
    const navigate =useNavigate();

    const {newArrivalProductId}=useParams();
    console.log("newArrivalProductId :-", newArrivalProductId);

    const handleNewArrivalDetailBack=()=>{
        console.log("handleNewArrivalDetailBack called....");
        navigate('/');
    }

    return (
        <div>
            <h3>NewArrivalProductDetails
            NewArrivalProductDetails</h3>
            <button onClick={handleNewArrivalDetailBack}>Back to Home</button>
        
        </div>
    );
}

export default NewArrivalProductDetails;