import React, { useState, useEffect } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import ProductStream from './ProductStream';
import FilterButton from './FilterButton';
import FilterOptions from './FilterOptions';
import { useProductLoader } from '../api/useProductLoader';
import { useProductFilter } from '../api/useProductFilters';
import { useFilterLoader } from '../api/useFilterLoader';
import { filterByTypes } from '../utils/filters';

const App = () => {
  const products = useProductLoader();
  const filters = useFilterLoader();

  const [filterApplied, setFilterStatus] = useState(false); // toggle to display Filter Options Modal
  const [filteredByColors, setFilteredByColors] = useState([]); // Selected Filter by Color
  const [filteredByPattern, setFilteredByPattern] = useState([]); // Selected Filter by Pattern
  
  // let filterAppliedProducts = []; // API response after color + pattern filters are applied
  // const handleFilterByColor = (id) => {
  //   setFilteredByColors(filterByTypes(filteredByColors, id));
  //   filterAppliedProducts = useProductFilter(
  //     filteredByColors,
  //     filteredByPattern,
  //   );
  // };

  return (
    <>
      <GlobalStyle />
      <Header />
      <FilterButton onFilterClick={() => setFilterStatus(!filterApplied)} />
      {filterApplied && (
        <FilterOptions
          data={filters}
          onCloseClick={() => setFilterStatus(false)}
          filteredByColors={filteredByColors}
          filteredByPattern={filteredByPattern}
          setFilteredByColors={id =>
            // handleFilterByColor(id) // does not work!!
            setFilteredByColors(filterByTypes(filteredByColors, id))
          }
          setFilteredByPattern={id =>
            setFilteredByPattern(filterByTypes(filteredByPattern, id))
          }
        />
      )}
      <Layout>
        <ProductStream products={products} />
      </Layout>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Layout = styled.article`
  padding: 0 20px;
`;

export default App;
