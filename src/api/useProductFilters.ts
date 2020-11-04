import { useEffect, useState } from 'react';
import { execute } from '@aboutyou/backbone/helpers/execute';
import {
  APISortOrder,
  createProductsSearchEndpointRequest,
} from '@aboutyou/backbone/endpoints/products/products';
import { useAsyncLoader } from './useAsyncLoader';
import { normalizeProduct } from './normalizeProduct';

const SHOP_ID = 139;

export const useProductFilter = (colorFilters = [''], patternFilters = ['']) => {
  const [products, setProductFilters] = useState([]);

  useEffect(() => {
    const response = useAsyncLoader(
      () =>
        execute(
          'http://0.0.0.0:9459/v1/',
          SHOP_ID,
          createProductsSearchEndpointRequest({
            where: {
              categoryId: 20290,
              attributes: [{
                type: 'attributes',
                key: 'color',
                values: colorFilters,
                // values: [38930],
              },
              {
                type: 'attributes',
                key: 'pattern',
                values: patternFilters,
                // values: [35005, 35011],
              }
              ],
            },
            pagination: {
              page: 1,
              perPage: 50,
            },
            sort: {
              channel: 'etkp',
              direction: APISortOrder.Descending,
              score: 'category_scores',
            },
            with: {
              attributes: {
                withKey: ['brand'],
              },
              priceRange: true,
            },
          }),
        ).then(({ data }) => setProductFilters(data.entities.map(normalizeProduct))),
      []
    )
  }, [products]);

  return Array.isArray(products) ? products : [];
};
