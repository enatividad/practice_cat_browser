import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CatCard from './CatCard';

export default function CatCards({ cats }) {
  return (
    <Row>
      {cats ? cats.map(cat => (
        <CatCard key={cat.id} cat={cat} />
      )) : (
        <Col>
          No cats available
        </Col>
      )}
    </Row>
  );
}
