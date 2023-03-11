import React from 'react'
import './App.css';
import { Component  } from 'react';

class Logic extends Component{
  constructor(props) {
    super(props)

    this.state = {
      ans11: 'sometimes',
      ans12: 'sometimes',
      ans13: 'sometimes',
      ans14: 'sometimes',
      ans15: 'sometimes',
      answerValue1: 0,
    }
  }

  submitForm = event => {
    event.preventDefault()
    const form = document.querySelector('#myForm'); // Get the form element
    const inputs = form.querySelectorAll('select'); // Get all input and textarea elements
  
    const answerValues = [
      { option: "never", value: 0 },
      { option: "rarely", value: 0.25 },
      { option: "sometimes", value: 0.5 },
      { option: "frequently", value: 0.75 },
      { option: "always", value: 1 },
    ];
    
    let answerValue1 = 0;
    inputs.forEach(input => {
      const answerOption = input.value;switch (answerOption) {
        case "never":
          answerValue1 += answerValues[0].value;
          break;
        case "rarely":
          answerValue1 += answerValues[1].value;
          break;
        case "sometimes":
          answerValue1 += answerValues[2].value;
          break;
        case "frequently":
          answerValue1 += answerValues[3].value;
          break;
        case "always":
          answerValue1 += answerValues[4].value;
          break;
        default:
          break;
      }
    });
  
    
    if (answerValue1 >= 3.5) {
      alert('You have a learning disalbility')
    }
    else{
      alert('You do not have a learning disability')
    }
  
  }

  handleAns11Change = event => {
    this.setState({
      ans11: event.target.value 
    })
  }

  handleAns12Change = event => {
    this.setState({
      ans12: event.target.value 
    })
  }

  handleAns13Change = event => {
    this.setState({
      ans13: event.target.value 
    })
  }

  handleAns14Change = event => {
    this.setState({
      ans14: event.target.value 
    })
  }

  handleAns15Change = event => {
    this.setState({
      ans15: event.target.value 
    })
  }

  handleSubmit = event => {
    alert(`${this.state.ans1} ${this.state.ans2}`);
    
  }

  render() {
  return (
    <form onSubmit={this.submitForm} className="fullForm">

      <div className="heading">
        <h2>Maths and Logic Assesment</h2>
      </div>

      <div>
        <h3 className="heading3">How often does your child:</h3>
        <label className="L">Confuse math symbols and/or operations? (e.g., addition, subtraction, multiplication, division)</label>
        <select className="S" value={this.state.ans11} onChange={this.handleAns11Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Have difficulty comparing the relative size of whole numbers and/or fractions? (e.g., Which is largest: 347 or 743? Which is largest: ¼ or ½)?</label>
        <select className="S" value={this.state.ans12} onChange={this.handleAns12Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Reverse numbers? (e.g., 81 for 18)</label>
        <select className="S" value={this.state.ans13} onChange={this.handleAns13Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Struggle with concepts related to time and/or money? (e.g., days, weeks, months, hours; penny, nickel, dime)</label>
        <select className="S" value={this.state.ans14} onChange={this.handleAns14Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Struggle to differentiate facts from fantasy?</label>
        <select className="S" value={this.state.ans15} onChange={this.handleAns15Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <button className="B" type="submit">Submit</button>
    </form>
  );
}
}
export default Logic;