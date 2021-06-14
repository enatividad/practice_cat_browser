import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import theCatApi from '../services/theCatApi';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CatsPage() {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState(null);
  const findBreed = id => breeds.find(breed => breed.id === id) || null;

  useEffect(() => {
    theCatApi('breeds')
      .then(res => res.json())
      .then(setBreeds);
  }, []);

  const fetchCats = useCallback(page => {
    if (!breed) return Promise.resolve(null);

    const url = `images/search?page=${page}&limit=10&breed_id=${breed.id}`;
    return theCatApi(url).then(res => res.json());
  }, [breed]);

  const [cats, setCats] = useState(null);

  useEffect(() => fetchCats(1).then(setCats), [fetchCats]);

  return (
    <Container>
      <h1>Cat Browser</h1>

      <Row>
        <Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>Breed</Form.Label>
            <Form.Control
              as="select"
              onChange={ev => setBreed(findBreed(ev.target.value))}
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

      <Row>
        {cats ? cats.map(cat => (
          <Col key={cat.id} sm={6} md={3}>
            <Card>
              <Card.Img variant="top" src={cat.url} />
              <Card.Body>
                <Button variant="primary" block>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <Col>
            No cats available
          </Col>
        )}
      </Row>

      <Button
        className="mt-3"
        variant="success"
        disabled={!breed}
      >
        Load more
      </Button>
    </Container>
  );
}
