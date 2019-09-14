import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super()

    this.state = {
      balance: 0,
      rate: 0,
    }
  }

  // handleClick() {
  //   const calculator = this;
  // }

  render(){
    return(
      <div>
        content
      </div>
    )
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div>
            <h1>Mortgage Calculator</h1>
          </div>
          <form>
            <div className='form-group'>
              <label for='balance'>Balance</label>
              <input className='form-control' name='balance' type='number'></input>
            </div>
            <div className='form-group'>
            <label for='rate'>Rate</label>
              <input className='form-control' name='rate' type='number' step='0.01'></input>
            </div>
            <div className='form-group'>
              <label for='term'>Term</label>
              <select className='form-control' name='term'>
                <option>15</option>
                <option>30</option>
              </select>
            </div>
            <div className='form-group'>
              <button name='submit' /* onClick={calculate} */>Calculate</button>
            </div>
            <div className='col-md-1 output' id='output'></div>
          </form>
        </div>
         {/* your JSX goes here */}
      </div>
    );
  }
}