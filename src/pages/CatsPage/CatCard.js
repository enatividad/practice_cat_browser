import {
  Link,
} from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

export default function CatCard({ cat }) {
  return (
    <Col sm={6} md={3}>
      <Card>
        <Card.Img variant="top" src={cat.url} />
        <Card.Body>
          <Link
            className="btn btn-primary btn-block"
            to={`/cats/${cat.id}`}
          >
            View
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
