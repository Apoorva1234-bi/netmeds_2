import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FitnessProductDetails(props) {

    const navigate =useNavigate();

    const {fitnessProductId}=useParams();
    console.log("fitnessProductId :-", fitnessProductId);

    const handleFitnessDetailsBack=()=>{
        console.log("handleFitnessDetailsBack called....");
        navigate('/');
    }

    return (
        <div>
            fitness details 
            <button onClick={handleFitnessDetailsBack}>Back to Home</button>
        </div>
    );
}

export default FitnessProductDetails;