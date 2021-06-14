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
  const breeds = useBreeds();
  const [breed, setBreedId] = useBreed(breeds);
  const [cats, setCats] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(true);

  const fetchCats = useCallback(page => {
    if (!breed) return Promise.resolve(null);

    const url = `images/search?page=${page}&limit=10&breed_id=${breed.id}`;
    return theCatApi(url).then(res => res.json());
  }, [breed]);

  useEffect(() => {
    fetchCats(1).then(cats => {
      setLoadMoreIsVisible(true);
      setCats(cats);
    });
  }, [fetchCats]);

  return (
    <Container>
      <h1>Cat Browser</h1>

      <Row>
        <Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>Breed</Form.Label>
            <Form.Control
              as="select"
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

      {loadMoreIsVisible && (
        <Button
          className="mt-3"
          variant="success"
          disabled={!breed}
          onClick={() => {
            const newPage = page + 1;
            fetchCats(newPage).then(freshCats => {
              setPage(newPage);
              // note-start because thecatapi.com is showing some weird
              //   api behaviour like SHOWING PREV RESULTS, these lines are
              //   necessary.
              const newCats = [...cats];
              const length = newCats.length;
              for (const freshCat of freshCats) {
                if (!newCats.find(cat => cat.id === freshCat.id))
                  newCats.push(freshCat);
              }
              // note-end
              setLoadMoreIsVisible(length !== newCats.length);
              setCats(newCats);
            });
          }}
        >
          Load more
        </Button>
      )}
    </Container>
  );
}

function useBreeds() {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    theCatApi('breeds')
      .then(res => res.json())
      .then(setBreeds);
  }, []);
  return breeds;
}

function useBreed(breeds) {
  const [breed, setBreed] = useState(null);
  const setBreedId = id => setBreed(breeds.find(b => b.id === id) || null);
  return [breed, setBreedId];
}
