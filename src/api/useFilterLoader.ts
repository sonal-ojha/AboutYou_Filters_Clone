import { useCallback } from 'react';
import { useAsyncLoader } from './useAsyncLoader';

const getfilters= (data) => data.filter(item => item.slug === 'color' || item.slug === 'pattern');

export const useFilterLoader = () => {
  const filters = useAsyncLoader(
    useCallback(
      () =>
        fetch('http://0.0.0.0:9459/v1/filters?with=values&filters%5Bcategory%5D=20236&shopId=139').then(res => res.json())
        .then(data => getfilters(data))
        .catch(err => console.log(err)),
      [],
    ),
  );
  return Array.isArray(filters) ? filters : [];
};
