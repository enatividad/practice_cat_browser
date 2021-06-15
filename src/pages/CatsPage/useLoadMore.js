import {
  useState,
} from 'react';

export default function useLoadMore(cats, setCats, fetchCats) {
  const [isVisible, setIsVisible] = useState(true);
  const [page, setPage] = useState(1);
  const load = () => {
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
      setIsVisible(length !== newCats.length);
      setCats(newCats);
    });
  };
  return { isVisible, setIsVisible, load };
}
