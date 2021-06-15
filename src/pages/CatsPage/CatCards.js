import {
  useContext,
} from 'react';

import Context from './Context';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CatCard from './CatCard';

export default function CatCards() {
  const { cats } = useContext(Context);
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
