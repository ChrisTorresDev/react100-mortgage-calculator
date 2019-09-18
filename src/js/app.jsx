import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props)

    this.state = {
      balance: 0,
      rate: 0,
      term: '',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate() {
    let amount = this.state.balance;
    let rate = this.state.rate/1200;
    let term = this.state.term*12;
    

    mortgage = amount*(rate * Math.pow((1 + rate),term))/(Math.pow((1 + rate), term) - 1);
    return mortgage;
    
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
              <label for='balance'>Loan Balance</label>
              <input className='form-control' name='balance' type='number' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className='form-group'>
              <label for='rate'>Interest Rate (%)</label>
              <input className='form-control' name='rate' type='number' step='0.01' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className='form-group'>
              <label for='term'>Loan Term (years)</label>
              <select value={this.state.term} className='form-control' name='term' onChange={this.handleChange.bind(this)}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
            <div className='form-group'>
              <button name='submit' onClick={this.calculate.bind(this)}>Calculate</button>
            </div>
            <div className='col-md-1 output' id='output'>
              <p>{this.calculate}</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}