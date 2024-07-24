import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrendingCards from '../Home_TrendingToday/TrendingCard'
import { newArrival } from '../../assets/js/NewArrival'


const NewArrival =()=>{

    const data = newArrival

    return (
        <>
            <Container fluid>
                <Row >
                    <Col >
                        <h2>New Arrival</h2>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <TrendingCards data={data} lg={4} md={6} dm={12}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default NewArrival;