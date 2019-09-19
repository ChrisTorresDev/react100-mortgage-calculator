import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super()

    this.state = {
      balance: '',
      rate: '',
      term: '',
      submit: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate(e) {
    e.preventDefault();
    let amount = this.state.balance;
    let rate = this.state.rate / 100 / 12;
    let term = this.state.term * 12;

    let payment = amount*(rate * Math.pow((1 + rate), term))/(Math.pow((1 + rate), term) - 1);
    
    this.setState(
      {submit: payment.toFixed(2)}
      )
   
    return payment;
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
              <input className='form-control' name='balance' type='number' onChange={this.handleChange}></input>
            </div>
            <div className='form-group'>
              <label for='rate'>Interest Rate (%)</label>
              <input className='form-control' name='rate' type='number' step='0.01' onChange={this.handleChange}></input>
            </div>
            <div className='form-group'>
              <label for='term'>Loan Term (years)</label>
              <select value={this.state.term} className='form-control' name='term' onChange={this.handleChange}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
            <div className='form-group'>
              <button name='submit' onClick={(e) => this.calculate(e)}>Calculate</button>
            </div>
            <div className='col-md-1 output' id='output'>
              <p>{this.state.submit} is your payment.</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}