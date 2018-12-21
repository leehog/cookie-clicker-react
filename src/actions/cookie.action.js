import { ADD_COOKIE } from '../types'

export const addCookies = (cookies) => {
    console.log(cookies)
    return {
        type: ADD_COOKIE,
        payload: cookies    
    }
}