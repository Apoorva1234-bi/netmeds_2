import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function AllFitness(props) {

    const {fitnessProductid}=useParams();
    console.log("fitnessProductid",fitnessProductid);

    const navigate=useNavigate();
    

    const handleBack=()=>{
        console.log("handleBack called");
        navigate('/')
    }

    return (
        <div>
            AllFitness
            AllFitness
            <Col>
        <button onClick={handleBack}>Back to home</button>
        </Col>
        
        </div>
    );
}

export default AllFitness;