import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card1 from '../../components/cardss/Card1'
import Carousel1 from '../../components/carousels/Carousel1'
import Navbarr1 from '../../components/navbars/Navbarr1'

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Navbarr1/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Carousel1/>
                    </Col>
                </Row>
<br />
<Row>
<Col>
<Card1/>
</Col>
<Col>
<Card1/>
</Col>
<Col>
<Card1/>
</Col>
</Row>

            </Container>
        </div>
    )
}

export default Home
