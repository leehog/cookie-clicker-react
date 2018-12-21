import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addCookies } from './actions/cookie.action'
// Components
import Cookie from './components/cookie'
import Header from './components/header'
import Store from './components/shop'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col m6 s12">
            <Cookie />
          </div>
          <div className="col m6 s12">
            <Store />
          </div>
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

export default connect(null, mapDispatchToProps)(App)
