import {
  useEffect,
  useState,
} from 'react';

import theCatApi from '../../services/theCatApi';

export default function useBreeds() {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    theCatApi('breeds')
      .then(res => res.json())
      .then(setBreeds);
  }, []);
  return breeds;
}
