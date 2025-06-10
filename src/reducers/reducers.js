import { combineReducers } from 'redux';
import tauCharts from 'taucharts';

export const chart = (state = {}, action) => {
  switch (action._type) {
    case 'INITIALIZE_DATA':
      return action.data;
    case 'DELETE_DATA':
    return {};
    case 'ADD_DATA':
    return state + action.data;
    case 'CREATE_BAR_CHART':
      let barChart = new tauCharts({
        data: action.data,
        type: action.type,
        x: action.x,
        y: action.y,
        color: action.color
      });
      return state = {bar: barChart};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  chart,
});
