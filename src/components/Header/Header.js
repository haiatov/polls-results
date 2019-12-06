import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.scss'

class Header extends Component {
  render() {
    const { poll_name: pollName, user_fio: userFio, passage_date: passageDate } = this.props.poll
    return(
      <div className="header">
        <h1 className="header__name">Результаты теста: <i>{pollName}</i></h1>
        <h2 className="header__user">Пользователь: <i>{userFio}</i></h2>
        <h4 className="header__date">Дата прохождения: <i>{passageDate}</i></h4>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  poll: state.poll
})

export default connect(mapStateToProps)(Header)