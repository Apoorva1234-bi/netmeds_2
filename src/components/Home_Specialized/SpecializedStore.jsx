import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { specializedstore } from '../../assets/js/SpecializedStore'
import TrendingCards from '../Home_TrendingToday/TrendingCard'

const SpecializedStore =()=>{

    const data = specializedstore

    return (
        <>
            <Container fluid>
                <Row >
                    <Col >
                        <h2>Specialized Stores</h2>
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
export default SpecializedStore;