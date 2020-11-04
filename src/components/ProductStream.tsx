import React, { FC } from 'react';
import styled from 'styled-components';
import { Product } from '../types/Product';
import ProductTile from './ProductTile';

interface Props {
  products: Product[];
}

const ProductStream: FC<Props> = ({ products }) => {
  if (!!products && products.length > 0) {
    return (
      <Wrapper>
        {products.map(product => (
          <ProductTile key={product.id} {...product} />
        ))}
      </Wrapper>
    );
  }
  return <NotFoundWrapper>Sorry, No Products Found</NotFoundWrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2.5px;
  > * {
    width: 50%;
    padding: 10px 2.5px 0;
    @media (min-width: 768px) {
      width: 33%;
    }
    @media (min-width: 1024px) {
      width: 25%;
    }
  }
`;

const NotFoundWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 10%;
`;

export default ProductStream;
