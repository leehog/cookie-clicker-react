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
        <p className="cookie-count header-title">Total cookies: {this.state.cookies}</p>
        <div className="header-bonus">
          <p className="header-title">Current boost: {this.props.boost > 1 ? this.props.boost + ' cookies/click' : 'No boost yet'} </p>
          <p className="header-title">Current factory: {this.props.factory ? this.props.factory + ' cookies/second' : 'No factory yet'}</p>
        </div>
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
    const { boost } = state.boost
    return {
      cookies,
      factory,
      boost
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)