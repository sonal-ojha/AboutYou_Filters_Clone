import React, { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import ProductStream from './ProductStream';
import FilterButton from './FilterButton';
import FilterOptions from './FilterOptions';
import { useProductLoader } from '../api/useProductLoader';
import { useFilterLoader } from '../api/useFilterLoader';
import { filterByTypes } from '../utils/filters';

const App = () => {
  const filters = useFilterLoader();
  
  const [isFiltersVisible, toggleFilterVisiblity] = useState(false); // toggle to display Filter Options Modal
  const [filteredByColors, setFilteredByColors] = useState([]); // Selected Filter by Color
  const [filteredByPattern, setFilteredByPattern] = useState([]); // Selected Filter by Pattern
  
  const products = useProductLoader(filteredByColors, filteredByPattern);

  const handleFilterByColor = (id: number) => {
    setFilteredByColors(filterByTypes(filteredByColors, id));
  };

  const handleFilterByPattern = (id: number) => {
    setFilteredByPattern(filterByTypes(filteredByPattern, id));
  };

  // Reset all the filters selected by user
  const handleClearAllFilters = () => {
    setFilteredByColors([]);
    setFilteredByPattern([]);
    toggleFilterVisiblity(!isFiltersVisible);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <FilterButton onFilterClick={() => toggleFilterVisiblity(!isFiltersVisible)} />
      {isFiltersVisible && (
        <FilterOptions
          data={filters}
          onCloseClick={() => toggleFilterVisiblity(false)}
          filteredByColors={filteredByColors}
          filteredByPattern={filteredByPattern}
          setFilteredByColors={handleFilterByColor}
          setFilteredByPattern={handleFilterByPattern}
          onClearClick={handleClearAllFilters}
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
