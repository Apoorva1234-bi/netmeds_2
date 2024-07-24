import React from 'react'
import styles from './PaymentBox.module.css'
// import {UncontrolledCarousel} from 'reactStrap'
// import { Container } from 'react-bootstrap';

const Example = (props) => {
    const { data } = props;
    // console.log('insidie payment box:-', data)


    return (
        <Container id={styles.PaymentBox_Container}>
            <Row>

            </Row>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'Slide 1',
                        key: 1,
                        src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'Slide 2',
                        key: 2,
                        src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Slide 3',
                        key: 3,
                        src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            />
        </Container>

    )
}
export default Example;