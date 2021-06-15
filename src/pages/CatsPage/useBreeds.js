import {
  useEffect,
  useState,
} from 'react';

import theCatApi from '../../services/theCatApi';

export default function useBreeds() {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    theCatApi('breeds').then(b => setBreeds(b || []));
  }, []);
  return breeds;
}
