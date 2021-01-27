import React, { Component } from 'react'
import { connect } from 'react-redux'

import { questionsAllCount, questionsRightCount } from '../../store/selectors/questions.js'

import './Header.scss'

class Header extends Component {
  render() {
    const { poll, questionsAllCount, questionsRightCount } = this.props
    const { poll_name: pollName, user_fio: userFio, passage_date: passageDate } = this.props.poll

    let percent = Math.round((questionsRightCount / questionsAllCount) * 100);
    if (isNaN(percent)) percent = 0;

    let passedTitleElement = <div></div>
    if (+poll.result_id === 1) {
      passedTitleElement = <h3 className="result result__success">☑ {poll.result}</h3>
    } else {
      passedTitleElement = <h3 className="result result__fail">☒ {poll.result}</h3>
    }

    return (
      <div className="header">
        <h1 className="header__name">Результаты теста: <i>{pollName}</i></h1>
        <h2 className="header__user">Пользователь: <i>{userFio}</i></h2>
        <h4 className="header__date">Дата прохождения: <i>{passageDate}</i></h4>
        {passedTitleElement}
        <div>Вопросов в тесте: <b>{questionsAllCount}</b></div>
        <div>Вы ответили правильно на: <b>{questionsRightCount}</b> (Необходимо ответить на: <b>{poll.fixed_answer}</b>)</div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  questionsAllCount: questionsAllCount(state),
  questionsRightCount: questionsRightCount(state),
  poll: state.poll
})

export default connect(mapStateToProps)(Header)