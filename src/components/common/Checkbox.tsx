import React, { FC } from 'react'
import styled from 'styled-components'
import { allColors } from './constant';

import { CheckboxProps, StyledCheckboxProps } from '../../types/Checkbox';

const Checkbox: FC<CheckboxProps> = ({ className, checked, overrideColors, name, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} name={name} overrideColors={overrideColors}>
      <Icon viewBox="0 0 24 24" name={name}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg<{ name: string }>`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  stroke: ${props => (props.name === 'schwarz' || props.name === 'blau' ? '#fff' : 'black' )};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.overrideColors ? allColors[props.name] : '#fff')};
  border-radius: 3px;
  transition: all 150ms;
  color: black;
  border: 0.5px solid #181818;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

export default Checkbox;
