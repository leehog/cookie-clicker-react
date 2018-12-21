import { combineReducers } from 'redux'
import cookieReducer from './cookie.reducer'
import boostReducer from './boost.reducer'
import factoryReducer from './factory.reducer'

export default combineReducers({
    cookies: cookieReducer,
    boost: boostReducer,
    factory: factoryReducer
})
