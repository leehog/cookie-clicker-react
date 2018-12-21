import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCookies } from '../actions/cookie.action'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      cookies: 0,
      factoryTimer: new Date().toLocaleString()
    }
  }
  componentWillReceiveProps() {
    this.setState({ cookies: this.props.cookies })
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.factoryIncrease(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  factoryIncrease() {
    const factoryValue = this.props.factory
    if (this.props.factory > 0) {
      this.props.addCookies(factoryValue)
    }
  }

  render() {
    return (
      <div className="header">  
        <p className="cookie-count">Total cookies: {this.state.cookies}</p>
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
 
const mapStateToProps = (state) => {
    const { cookies } = state.cookies
    const { factory } = state.factory
    return {
      cookies,
      factory
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)