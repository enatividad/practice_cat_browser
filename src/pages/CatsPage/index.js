import {
  useEffect,
} from 'react';

import useBreed from './useBreed';
import useBreeds from './useBreeds';
import useCats from './useCats';
import useLoadMore from './useLoadMore';

import Context from './Context';

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import BreedPicker from './BreedPicker';
import CatCards from './CatCards';

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
    <Context.Provider value={{ breeds, breed, setBreedId, cats }}>
      <Container>
        <h1>Cat Browser</h1>

        <BreedPicker />

        <CatCards cats={cats} />

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
    </Context.Provider>
  );
}
