import React from 'react'
import styles from './Home_TrendingToday.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { trendingtoday } from '../../assets/js/TrendingToday'
import TrendingCards from './TrendingCard'


const Home_TrendingToday = () => {
    const data = trendingtoday

    return (
        <>
            <Container fluid id={styles.home_trending_offer}>
                <Row className={styles.home_trending_Row}>
                    <Col className={styles.home_trending_Col}>
                        <h2>Trending Today</h2>
                    </Col>
                </Row>
                <Row className={styles.home_trending_Row}>
                    <Col className={styles.home_trending_Col}  >
                        <TrendingCards data={data} lg={4} md={6} dm={12}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home_TrendingToday;