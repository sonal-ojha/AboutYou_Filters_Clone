import React from 'react';
import styled from 'styled-components';

function FilterButton({ onFilterClick }) {
  return (
    <Wrapper>
      <StyledFilterButton onClick={onFilterClick}>filter</StyledFilterButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
`;

const StyledFilterButton = styled.button`
  width: 80px;
  height: 33px;
  background-color: #fff;
  color: black;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid rgb(229, 229, 229);
  font-size: 12px;
  font-weight: 500;
  outline: none;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 10px 15px 0px,
      rgba(0, 0, 0, 0.08) 0px 2px 2px 0px;
  }
`;

export default FilterButton;
