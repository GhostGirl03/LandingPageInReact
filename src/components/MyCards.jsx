import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function MyCards() {
    return (
      <div className="d-flex justify-content-around">
      <Row xs={1} md={4}>

      <Col>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
      </Card>
     </Col>

     <Col>
     <Card style={{ width: '14rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
      </Card>
     </Col>
   
     <Col>
     <Card style={{ width: '14rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
      </Card>
     </Col>

     <Col>
     <Card style={{ width: '14rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
      </Card>
     </Col>
     
    </Row>
    </div>
);
}


