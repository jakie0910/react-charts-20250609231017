import React, { Component } from 'react';
import logo from './logo.svg';
import tauCharts from 'taucharts';
import './App.css';

import teamData from './components/global/dataStubs/TeamData';

//
// let chart = new tauCharts.Chart({
//             data: teamData,
//             type: 'horizontalBar',
//             x: 'effort',
//             y: 'team',
//             color:'priority'
//         });
// chart.renderTo('#bar');

this.props.createBarChart('#bar', teamData, 'horizontalBar', 'effort', 'team', 'priority');
this.props.chart.bar.renderTo(this.props.chart.bar.name);

export class App extends Component {

  render() {

    return (
      // <div className="App">
      //
      //   <p className="App-intro">
      //   </p>
      //
      // </div>
      <div>
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React Charts</h1>
       </header>
        <h1>{this.props.chart.title || 'Click button'}</h1>

        {this.props.chart.title ?
          <button onClick={this.props.deleteData}>
            Exit Chart
          </button> :
          <button onClick={() => this.props.initializeData({ title: 'Bar Chart!' })}>
            Click Me!
          </button>
       }

      </div>
    );
  }
}

export default App;
