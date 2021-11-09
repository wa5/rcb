import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card1 from '../../components/cardss/Card1'
import Carousel1 from '../../components/carousels/Carousel1'
import Navbarr1 from '../../components/navbars/Navbarr1'
import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'

function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbarr1 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Carousel1 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    
                        <Card1 img={img1}/>
                    </Col>
                    <Col>
                        <Card1 img={img2}/>
                    </Col>
                    <Col>
                        <Card1 img={img3}/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home
