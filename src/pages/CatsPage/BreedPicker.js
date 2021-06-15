import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

export default function BreedPicker({ breeds, breed, setBreedId }) {
  return (
    <Row>
      <Col sm={6} md={3}>
        <Form.Group>
          <Form.Label>Breed</Form.Label>
          <Form.Control
            as="select"
            value={breed?.id || ''}
            onChange={ev => setBreedId(ev.target.value)}
          >
            <option value="">Select Breed</option>
            {breeds.map(breed => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
}
