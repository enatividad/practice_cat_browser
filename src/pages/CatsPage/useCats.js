import {
  useCallback,
  useState,
} from 'react';

import theCatApi from '../../services/theCatApi';

export default function useCats(breed) {
  const [cats, setCats] = useState(null);
  const fetchCats = useCallback(page => {
    if (!breed) return Promise.resolve(null);

    const url = `images/search?page=${page}&limit=10&breed_id=${breed.id}`;
    return theCatApi(url).then(res => res.json());
  }, [breed]);
  return [cats, setCats, fetchCats];
}
