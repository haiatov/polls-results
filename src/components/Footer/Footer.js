import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Footer.scss'
import { questionsAllCount, questionsRightCount } from '../../store/selectors/questions.js'

class Footer extends Component {
  render() {
    const { questionsAllCount, questionsRightCount, poll } = this.props
    let percent = Math.round((questionsRightCount / questionsAllCount) * 100);
    if (isNaN(percent)) percent = 0;

    let passedTitleElement = <div></div>
    if (+poll.result_id === 1) {
      passedTitleElement = <h3 className="footer__success">☑ {poll.result}</h3>
    } else {
      passedTitleElement = <h3 className="footer__fail">☒ {poll.result}</h3>
    }

    return (
      <div className="footer">
        <div>Вопросов в тесте: <b>{questionsAllCount}</b></div>
        <div>Вы ответили правильно на: <b>{questionsRightCount}</b> (Необходимо ответить на: <b>{poll.fixed_answer}</b>)</div>
        {passedTitleElement}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  questionsAllCount: questionsAllCount(state),
  questionsRightCount: questionsRightCount(state),
  poll: state.poll
})

export default connect(mapStateToProps)(Footer)