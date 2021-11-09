import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img1 from '../../static/img/1.jpg'

function Card1(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img height="200px" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Card1
