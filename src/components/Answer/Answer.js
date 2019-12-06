import React, { Component } from 'react'

class Answer extends Component {
  render() {

    const answer = this.props.answer;
    const name = answer.answer;
    const userAnswerChecked = (answer.user_answer.toLowerCase() === "true") ? "checked" : "";
    const rightAsnwerChecked = (answer.right_answer.toLowerCase() === "true") ? "checked" : "";
    const inputType = this.props.inputType;

    return(
      <div className="question__row">
        <div className="question__cell">{name}</div>
        <div className="question__cell"><input type={inputType} checked={userAnswerChecked} /></div>
        <div className="question__cell"><input type={inputType} checked={rightAsnwerChecked} /> </div>
      </div>
    )
  }
}

export default Answer