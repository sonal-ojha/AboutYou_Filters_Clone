export interface StyledCheckboxProps {
  checked: boolean;
  overrideColors: boolean;
  name: string;
}

export interface CheckboxProps extends StyledCheckboxProps {
  onChange: () => void;
  className?: string;
}
