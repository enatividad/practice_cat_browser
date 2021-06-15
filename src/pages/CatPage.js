import {
  Link,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function CatPage() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Link className="btn btn-primary" to="/cats?breed=abys">
            Back
          </Link>
        </Card.Header>
        <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg" />
        <Card.Body>
          <h4>Abyssinian</h4>
          <h5>Origin: Egypt</h5>
          <h6>Active, Energetic, Independent, Intelligent, Gentle</h6>
          <p>
            The Abyssinian is easy to care for, and a joy to have in your home.
            They’re affectionate cats and love both people and other animals.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
