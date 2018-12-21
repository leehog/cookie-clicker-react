import { ADD_FACTORY } from '../types'

export const addFactory = (value) => {
    return {
        type: ADD_FACTORY,
        payload: value    
    }
}