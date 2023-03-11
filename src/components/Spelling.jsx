import React, { Component } from "react";
import './App.css';

class Write extends Component{
  constructor(props) {
    super(props)

    this.state = {
      ans6: 'sometimes',
      ans7: 'sometimes',
      ans8: 'sometimes',
      ans9: 'sometimes',
      ans10: 'sometimes',
      answerValue2: 0,
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
    
    let answerValue2 = 0;
    inputs.forEach(input => {
      const answerOption = input.value;switch (answerOption) {
        case "never":
          answerValue2 += answerValues[0].value;
          break;
        case "rarely":
          answerValue2 += answerValues[1].value;
          break;
        case "sometimes":
          answerValue2 += answerValues[2].value;
          break;
        case "frequently":
          answerValue2 += answerValues[3].value;
          break;
        case "always":
          answerValue2 += answerValues[4].value;
          break;
        default:
          break;
      }
    });
  
    
    if (answerValue2 >= 3.5) {
      alert('You have a learning disalbility')
    }
    else{
      alert('You do not have a learning disability')
    }
  
  }

  handleAns6Change = event => {
    this.setState({
      ans6: event.target.value 
    })
  }

  handleAns7Change = event => {
    this.setState({
      ans7: event.target.value 
    })
  }

  handleAns8Change = event => {
    this.setState({
      ans8: event.target.value 
    })
  }

  handleAns9Change = event => {
    this.setState({
      ans9: event.target.value 
    })
  }

  handleAns10Change = event => {
    this.setState({
      ans10: event.target.value 
    })
  }

  handleSubmit = event => {
    alert(`${this.state.ans1} ${this.state.ans2}`);
    event.preventDefault()
  }

  render() {
  return (
    <form onSubmit={this.submitForm} className="fullForm">

      <div className="heading">
        <h2>Spelling and Writing Assesment</h2>
      </div>

      <div>
        <h3 className="heading3">How often does your child:</h3>
        <label className="L">Make spelling errors in homework assignments?</label>
        <select className="S" value={this.state.ans6} onChange={this.handleAns6Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Have messy handwriting?</label>
        <select className="S" value={this.state.ans7} onChange={this.handleAns7Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Have trouble with punctuation and capitalization?</label>
        <select className="S" value={this.state.ans8} onChange={this.handleAns8Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Resist writing tasks?</label>
        <select className="S" value={this.state.ans9} onChange={this.handleAns9Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Have difficulty getting thoughts down on paper?</label>
        <select className="S" value={this.state.ans10} onChange={this.handleAns10Change}>
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
export default Write;