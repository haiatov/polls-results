import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from '../Question'
import { fetchQuestions } from '../../store/actions/questionsActions.js'

class QuestionsList extends Component {
  componentDidMount() {
    this.props.fetchQuestions(this.props.match.params.guid);
  }

  render() {
    const questionsElements = this.props.questions.map((item, index) => <Question key={item.question_id} question={item} index={index} />)
    return (
      <div>
        {questionsElements}
      </div>
    )
  }
}

const putStateToProps = (state, props) => ({
  questions: state.questions
})

const putDispatchToProps = {
  fetchQuestions
}

export default connect(putStateToProps, putDispatchToProps)(QuestionsList)