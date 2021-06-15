import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  useHistory,
} from 'react-router-dom';

export default function useBreed(breeds) {
  const history = useHistory();
  const [breed, setBreed] = useState(null);
  const setBreedId = useCallback(id => {
    const breed = breeds.find(b => b.id === id) || null;
    setBreed(breed);
    if (breed)
      history.push('?breed=' + breed.id);
    else
      history.push('');
  }, [breeds, history]);

  useEffect(() => {
    if (!breeds.length) return;

    const query = new URLSearchParams(window.location.search);
    const breedId = query.get('breed');
    if (breedId) setBreedId(breedId);
  }, [breeds, setBreedId]);

  return [breed, setBreedId];
}
