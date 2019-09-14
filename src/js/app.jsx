import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'>
            <input className='balance' type='number'></input>
          </div>
          <div className='col-md-1'>
            <input className='rate' type='number' step='0.01'></input>
          </div>
          <div className='col-md-1'>
            <select className='term'>
              <option>15</option>
              <option>30</option>
          </select>
          </div>
          <div className='col-md-1'>
            <button className='submit'></button>
          </div>
          <div className='col-md-1 output' itemID='output'></div>
        </div>
        {/* your JSX goes here */}
      </div>
    );
  }
}
