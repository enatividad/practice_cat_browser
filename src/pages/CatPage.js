import {
  useEffect,
  useState,
} from 'react';

import theCatApi from '../services/theCatApi';

import {
  useParams,

  Link,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function CatPage() {
  const catId = useParams().catId;
  const [image, setImage] = useState();
  useEffect(() => {
    if (catId) {
      theCatApi(`images/${catId}`)
        .then(res => res.json())
        .then(i => setImage(i || null));
    } else {
      setImage(null);
    }
  }, [catId]);

  const breed = image?.breeds?.[0];

  return typeof image === 'undefined' ? (
    <Container>
      <h5>Loading…</h5>
    </Container>
  ) : image && breed ? (
    <Container>
      <Card>
        <Card.Header>
          <Link className="btn btn-primary" to={`/cats?breed=${breed.id}`}>
            Back
          </Link>
        </Card.Header>
        <Card.Img variant="top" src={image.url} />
        <Card.Body>
          <h4>{breed.name}</h4>
          <h5>Origin: {breed.origin}</h5>
          <h6>{breed.temperament}</h6>
          <p>{breed.description}</p>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    null
  );
}
