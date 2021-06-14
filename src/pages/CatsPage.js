import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CatsPage() {
  return (
    <Container>
      <h1>Cat Browser</h1>

      <Row>
        <Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>Breed</Form.Label>
            <Form.Control as="select">
              <option>Select Breed</option>
              <option>Abyssinian</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={3}>
          <Card>
            <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/TBA3JzB9P.jpg" />
            <Card.Body>
              <Button variant="primary" block>
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button className="mt-3" variant="success">
        Load more
      </Button>
    </Container>
  );
}
