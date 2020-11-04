const filterValues = (data: any[], filterType: string) => {
  let filters = data.filter(item => item.slug === filterType);
  return filters[0].values;
};

export const getfilterTypes = (data: any[]): { color: any[], pattern: any[] } => {
  let result = {
    color: [],
    pattern: [],
  };
  if (!!data && data.length > 0) {
    result.color = filterValues(data, 'color');
    result.pattern = filterValues(data, 'pattern');
  }
  return result;
};

export const filterByTypes = (filterArray: any[], data: number) => {
  const filterIndex = filterArray.findIndex(type => type === data);
  let filteredData = [...filterArray];
  if (filterIndex !== -1) { // Remove filter selection
    filteredData.splice(filterIndex, 1);
  } else { // Apply filter
    filteredData.push(data);
  }
  return filteredData;
}