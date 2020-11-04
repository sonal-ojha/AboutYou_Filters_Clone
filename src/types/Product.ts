export interface Product {
  id: number;
  image: string | null;
  name: string;
  price?: string;
}

export interface FiltereOptionsProps {
  onCloseClick: () => void;
  data: any[];
  filteredByColors: number[];
  setFilteredByColors: (id: number) => void;
  filteredByPattern: number[];
  setFilteredByPattern: (id: number) => void;
  onClearClick: () => void;
}
