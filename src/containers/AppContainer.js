import { connect } from 'react-redux';
import App from '../App'
import {
  initializeData,
  deleteData,
  addData,
  createBarChart,
} from '../actions/actions'


const mapStateToProps = (state, props) => ({
  chart: state.chart,
});

const mapDispatchToProps = {
  initializeData,
  deleteData,
  addData,
  createBarChart,
}

const AppContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
