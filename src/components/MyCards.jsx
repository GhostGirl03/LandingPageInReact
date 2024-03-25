import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function MyCards() {
    return (
      <Row lg={4}>
      
      <Card style={{ width: '18rem' }}>
    <Card.Body className="flex-column gap-4 ">
      <col>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
     </col>

     <col>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Find Out More!</Button>
     </col>

    </Card.Body>
    </Card>
   
    </Row>
);
}


