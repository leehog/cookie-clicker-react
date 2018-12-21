import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { addBoost } from '../actions/boost.actions'
import { addFactory } from '../actions/factory.actions'
import { connect } from 'react-redux'

class Store extends Component {

  buyBoost(value) {
    this.props.addBoost(value)
  }

  buyFactory(value) {
    this.props.addFactory(value)
  }

  render() { 
    return (
      <div className="store-content">
        <h2>Shop</h2>
          <ul className="collection with-header">
            <li className="collection-header">Boosts</li>
            { fakeData.boosts.map((boost) =>
              <li className="collection-item" key={uuid()}>
                {boost.title} 
                <div className="secondary-content">
                  <button 
                    className={`waves-effect waves-light btn ${boost.price > this.props.cookies ? 'disabled' : ''}`}
                    value={boost.price}
                    onClick={() => this.buyBoost(boost.value)}
                  >Buy price: {boost.price}
                  </button>
                </div>
              </li>
            ) }
          </ul>
          <ul className="collection with-header">
            <li className="collection-header">Factories</li>
            { fakeData.factories.map((factory) =>
              <li className="collection-item" key={uuid()}>
                {factory.title} 
                <div className="secondary-content">
                  <button 
                    className={`waves-effect waves-light btn ${factory.price > this.props.cookies ? 'disabled' : ''}`}
                    value={factory.price}
                    onClick={() => this.buyFactory(factory.value)}
                  >Buy price: {factory.price}
                  </button>
                </div>
              </li>
            ) }
          </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoost: (value) => {
        dispatch(addBoost(value))
    },
    addFactory: (value) => {
      dispatch(addFactory(value))
    }
  } 
}

const mapStateToProps = (state) => {
  const { cookies } = state.cookies
  return {
    cookies
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Store)

// Fake data
const fakeData = {
  "boosts":[ 
      {
          "title": "2 cookies per click",
          "value": 2,
          "price": 20
      },
      {
          "title": "3 cookies per click",
          "value": 3,
          "price": 30
      },
      {
          "title": "4 cookies per click",
          "value": 4,
          "price": 40
      },
      {
          "title": "5 cookies per click",
          "value": 5,
          "price": 50
      }
   ],
   "factories": [
      {
          "title": "2 cookies per second",
          "value": 2,
          "price": 100
      },
      {
          "title": "3 cookies per second",
          "value": 3,
          "price": 500
      },
      {
          "title": "4 cookies per second",
          "value": 4,
          "price": 700
      },
      {
          "title": "5 cookies per second",
          "value": 5,
          "price": 800
      }
   ]
}
