import React, { Component } from 'react'

class Answer extends Component {
  render() {

    const answer = this.props.answer;
    const name = answer.answer;
    const userAnswerChecked = (answer.user_answer.toLowerCase() === "true") ? "checked" : "";
    const rightAsnwerChecked = (answer.right_answer.toLowerCase() === "true") ? "checked" : "";
    const inputType = this.props.inputType;

    let className = "question__row";
    if (rightAsnwerChecked === "checked") className += " answer__row_success";
    if (rightAsnwerChecked !== "checked" && userAnswerChecked === "checked") className += " answer__row_fail";

    return (
      <div className={className}>
        <div className="question__cell"><input type={inputType} checked={userAnswerChecked} /></div>
        <div className="question__cell"><input type={inputType} checked={rightAsnwerChecked} /></div>
        <div className="question__cell">{name}</div>
      </div>
    )
  }
}

export default Answer