import {
  useEffect,
} from 'react';

import useBreed from './useBreed';
import useBreeds from './useBreeds';
import useCats from './useCats';
import useLoadMore from './useLoadMore';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import BreedPicker from './BreedPicker';
import CatCard from './CatCard';

export default function CatsPage() {
  const breeds = useBreeds();
  const [breed, setBreedId] = useBreed(breeds);
  const [cats, setCats, fetchCats] = useCats(breed);
  const loadMore = useLoadMore(cats, setCats, fetchCats);

  const setLoadMoreIsVisible = loadMore.setIsVisible;
  useEffect(() => {
    fetchCats(1).then(cats => {
      setLoadMoreIsVisible(true);
      setCats(cats);
    });
  }, [setCats, fetchCats, setLoadMoreIsVisible]);

  return (
    <Container>
      <h1>Cat Browser</h1>

      <BreedPicker breeds={breeds} breed={breed} setBreedId={setBreedId} />

      <Row>
        {cats ? cats.map(cat => (
          <CatCard key={cat.id} cat={cat} />
        )) : (
          <Col>
            No cats available
          </Col>
        )}
      </Row>

      {loadMore.isVisible && (
        <Button
          className="mt-3"
          variant="success"
          disabled={!breed}
          onClick={loadMore.load}
        >
          Load more
        </Button>
      )}
    </Container>
  );
}
