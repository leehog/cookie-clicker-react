import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { save, load } from "redux-localstorage-simple"

const createStoreWithMiddleware = applyMiddleware(save())(createStore)
const store = createStoreWithMiddleware(reducers, load())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))
