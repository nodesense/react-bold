import {INCREMENT, 
        DECREMENT, 
        RESET} from './action-types';

//action creators, actually functions that create action objects/helpers
//actions.js
export function increment(value) {
    return {
        type: INCREMENT,
        payload: { value: value}
    }
}

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: {value}
    }
}

export const reset = () => ({
    type: RESET
});