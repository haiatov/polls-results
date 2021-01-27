import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Footer.scss'

class Footer extends Component {
  render() {


    return (
      <div className="footer">
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(Footer)