

export const initializeData = (data) => {
  return {
      _type: 'INITIALIZE_DATA',
      data
  }
}

export const deleteData = () => {
  return {
    _type: 'DELETE_DATA'
  }
}

export const addData = (data) => ({
  _type: 'ADD_DATA',
  data
});

export const createBarChart = (name, data, type, x, y, color) => ({
  _type: 'CREATE_BAR_CHART',
  name,
  data,
  type,
  x,
  y,
  color
});
