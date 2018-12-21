import React, { Component } from 'react'
import cookie from '../static/img/cookie.png'
import { connect } from 'react-redux'
import { addCookies } from '../actions/cookie.action'

class Cookie extends Component {

  handleClick(boost) {
    this.props.addCookies(boost)
  }

  render() {
    return (
      <div className="main-content">
        <img src={cookie} className="cookie-icon" onClick={() => this.handleClick(this.props.boost)} alt="cookie-icon"/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addCookies: (cookies) => {
        dispatch(addCookies(cookies))
      }
  }
}

const mapStateToProps = state => {
    const { boost } = state.boost
    return {
      boost
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookie)