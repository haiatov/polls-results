import React, { Component } from 'react'
import cn from 'classnames'

import Answer from '../Answer'
import './Question.scss'

class Question extends Component {
  render() {
    const question = this.props.question;
    const name = question.question;

    const inputType = (+question.type_id === 10) ? "checkbox" : "radio";

    const answersElements = question.answers.map(item => <Answer key={item.answer_id} answer={item} inputType={inputType} />);

    const questionRowClass = this.checkCorrect(question.answers) ? 'question__row_success' : 'question__row_fail';

    return (
      <div className="question">
        <div className={cn('question__row', 'question__row_title', questionRowClass)}>
          <div className="question__cell question__cell_title">{name}</div>
          <div className="question__cell question__cell_small">Ваш<br />ответ</div>
          <div className="question__cell question__cell_small">Верный<br />ответ</div>
        </div>

        {answersElements}

      </div>
    )
  }

  checkCorrect = (answers) => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].user_answer.toLowerCase() !== answers[i].right_answer.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
}

export default Question