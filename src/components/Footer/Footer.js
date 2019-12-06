import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Footer.scss'
import { questionsAllCount, questionsRightCount } from '../../store/selectors/questions.js'

class Footer extends Component {
  render() {
    const { questionsAllCount, questionsRightCount, poll } = this.props
    const percent = Math.round((questionsRightCount / questionsAllCount) * 100) ;

    let passedTitleElement = <div></div>
    if(+poll.percent_response !== 0) {
      if(percent >= poll.percent_response) {
        passedTitleElement = <h3 class="footer__success">Вы прошли тест!</h3>
      }else {
        passedTitleElement = <h3 class="footer__fail">Вы не прошли тест!</h3>
      }
    }

    return(
      <div className="footer">
        <div>Вопросов в тесте: <b>{questionsAllCount}</b></div>
        <div>Правильных ответов: <b>{questionsRightCount}</b> (<b>{percent}</b>%)</div>
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