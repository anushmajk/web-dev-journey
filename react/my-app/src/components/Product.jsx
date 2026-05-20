import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Product = ({products}) => {
  
  return (
    <div>
      <Row>
        {products.map((products) => (
        <Col  key={products.id}>
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={products.Image} />
          <Card.Body>
            <Card.Title>{products.Name}</Card.Title>
            <Card.Text>{products.Description}</Card.Text>
          </Card.Body>
              </Card>
              </Col>
      ))}
        </Row>
    </div>
)
}
export default Product