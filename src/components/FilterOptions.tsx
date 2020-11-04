import React from "react";
import Checkbox from "./common/Checkbox";
import styled from "styled-components";

import { FiltereOptionsProps } from '../types/Product';
import { getfilterTypes } from "../utils/filters";

function FilterTypes({ data, overrideColors, selections, setSelections }) {
  return (
    data &&
    data.length > 1 &&
    data.map(item => (
      <Label key={item.id}>
        <Checkbox
          checked={selections.findIndex(type => type === item.id) !== -1}
          onChange={() => setSelections(item.id)}
          overrideColors={overrideColors}
          name={item.name}
        />
        <Text>{item.name}</Text>
      </Label>
    ))
  );
}

const FilterOptions = ({
  onCloseClick,
  data,
  filteredByColors,
  setFilteredByColors,
  filteredByPattern,
  setFilteredByPattern,
  onClearClick,
}: FiltereOptionsProps) => {
  const { color, pattern } = getfilterTypes(data);
  return (
    <Modal>
      <Wrapper>
        <Header>
          <HeadText>Filter Category</HeadText>
          <CloseButton onClick={onCloseClick}>x</CloseButton>
        </Header>
        <AllFilters>
          <FilterHeader>Colors</FilterHeader>
          <FilterTypeWrapper>
            <FilterTypes
              data={color}
              overrideColors={true}
              selections={filteredByColors}
              setSelections={setFilteredByColors}
            />
          </FilterTypeWrapper>
          <FilterHeader>Patterns</FilterHeader>
          <FilterTypeWrapper>
            <FilterTypes
              data={pattern}
              overrideColors={false}
              selections={filteredByPattern}
              setSelections={setFilteredByPattern}
            />
          </FilterTypeWrapper>
        </AllFilters>
        <Footer>
          <Button onClick={onCloseClick}>Submit</Button>
          <Button onClick={onClearClick}>Clear</Button>
        </Footer>
      </Wrapper>
    </Modal>
  );
}

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transform: translateX(0%);
  transition: opacity 300ms ease-in 0s;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 190;
`;

const Wrapper = styled.div`
  width: 410px;
  position: fixed;
  right: 0px;
  height: 100vh;
  z-index: 190;
  display: flex;
  flex-direction: column;
  top: 0px;
  transform: translateX(0%);
  transition: transform 300ms ease-in 0s;
  background-color: rgb(245, 245, 245);
`;

const Header = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 10px 15px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
`;

const Footer = styled(Header)`
  margin-top: 10px;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  font-size: 16px;
  &:hover {
    background: black;
    color: #fff;
    border: 1px solid black;
  }
`;

const Button = styled(CloseButton)`
  width: 130px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0.3;
  font-size: 14px;
  &:hover {
    background: black;
    color: #fff;
    border: 1px solid black;
  }
`;

const AllFilters = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(229, 229, 229);
  height: calc(100vh - 140px);
`;

const FilterHeader = styled.h4`
  margin: 20px 30px 0px;
`;

const HeadText = styled.h3``;

const FilterTypeWrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-flow: row wrap;
`;

const Label = styled.label`
  width: 50%;
  margin: 5px 0px;
`;

const Text = styled.span`
  margin-left: 8px;
  font-size: 14px;
`;

export default FilterOptions;
