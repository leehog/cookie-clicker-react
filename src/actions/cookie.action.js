import { ADD_COOKIE } from '../types'

export const addCookies = (cookies) => {
    return {
        type: ADD_COOKIE,
        payload: cookies    
    }
}