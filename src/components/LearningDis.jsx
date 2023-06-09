import React from 'react'
import { Component } from 'react';
import './App.css';

class Form extends Component{
  constructor(props) {
    super(props)

    this.state = {
      ans1: 'sometimes',
      ans2: 'sometimes',
      ans3: 'sometimes',
      ans4: 'sometimes',
      ans5: 'sometimes',
      answerValue: 0,
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

    let answerValue = 0;
    inputs.forEach(input => {
      const answerOption = input.value;switch (answerOption) {
        case "never":
          answerValue += answerValues[0].value;
          break;
        case "rarely":
          answerValue += answerValues[1].value;
          break;
        case "sometimes":
          answerValue += answerValues[2].value;
          break;
        case "frequently":
          answerValue += answerValues[3].value;
          break;
        case "always":
          answerValue += answerValues[4].value;
          break;
        default:
          break;
      }
    });


    if (answerValue >= 3.5) {
      alert('You have a learning disalbility')
    }
    else{
      alert('You do not have a learning disability')
    }

}

  

  handleAns1Change = event => {
    this.setState({
      ans1: event.target.value 
    })
  }
  
  handleAns2Change = event => {
    this.setState({
      ans2: event.target.value 
    })
  }

  handleAns3Change = event => {
    this.setState({
      ans3: event.target.value 
    })
  }

  handleAns4Change = event => {
    this.setState({
      ans4: event.target.value 
    })
  }

  handleAns5Change = event => {
    this.setState({
      ans5: event.target.value 
    })
  }

  handleSubmit = event => {
    alert(`${this.state.ans1} ${this.state.ans2}`);
  }

  render() {
  return (
    <div>
    <form onSubmit={this.submitForm} className="fullForm" id="myForm">
      
      <div className="heading">
        <h2>Reading Assesment</h2>
      </div>

      <div>
        <h3 className="heading3">How often does your child:</h3>
        <label className="L">Mispronounce (or used to) only certain words (e.g., says amunul for animal, poothtaste for toothpaste)</label>
        <select className="S" value={this.state.ans1} onChange={this.handleAns1Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Have difficulty reading unfamiliar words or guess at them?</label>
        <select className="S" value={this.state.ans2} onChange={this.handleAns2Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Pause, repeat or make mistakes when reading aloud?</label>
        <select className="S" value={this.state.ans3} onChange={this.handleAns3Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Struggle to understand what he or she has read?</label>
        <select className="S" value={this.state.ans4} onChange={this.handleAns4Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>

      <div>
        <label className="L">Avoid reading for pleasure?</label>
        <select className="S" value={this.state.ans5} onChange={this.handleAns5Change}>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="frequently">Frequently</option>
          <option value="always">Always</option>
        </select>
      </div>
      <button className="B" type="submit">Submit</button>
    </form>

    <div>
    {this.state.answerValue !== '' &&
  <p>
    Your child {this.state.answerValue >= 3.5 ? 'has a learning disability' : 'does not have a learning disability'}
  </p>
}

    </div>
    </div>
  );
}
}
export default Form;
