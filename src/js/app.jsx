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
    console.log(this.state);
  }

  calculate() {
    // const balance = this.state.balance;
    // const rate = this.state.rate;
    // const term = this.state.term;

    let mortgage = Math.pow(this.state.rate + 1)*this.state.rate / Math.pow(this.state.rate + 1) - 1;
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
            <div className='col-md-1 output' id='output'>{mortgage}</div>
          </form>
        </div>
      </div>
    );
  }
}