// configure store
import {createStore, combineReducers} from 'redux';

//action-types.js
export const INCREMENT = "COUNTER.INCREMENT"
export const DECREMENT = "COUNTER.DECREMENT"
export const RESET  = "COUNTER.RESET";

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

// reducer
// counterReducer.js
const INITIAL_STATE = 0;
export const counterReducer = (state = INITIAL_STATE, action) => {
    console.log('counterReducer', state, action)
    switch(action.type) {
        case INCREMENT: return state + action.payload.value;
        case DECREMENT: return state - action.payload.value;
        case RESET: return INITIAL_STATE;
        default: return state;
    }
}

// expect(counterReducer(0, {type: 'INCREENT', payload: value: 2})).toBe(2)

console.log('creating store now');
// createStore internally dispatch action to initialize store 

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer,
    //cart: cartReducer,
    //...
});

const store = createStore(rootReducer, {counter: 1000} );
export default store;

let state = store.getState()
console.log("counter is ", state.counter)

let action = {
    type: INCREMENT,
    payload: {
        value: 1
    }
}

// this call state = reducer(state, action)
console.log('dispatch action')
store.dispatch(action);
console.log('state is ', store.getState())

action = increment(2) // using action creators
store.dispatch(action);
console.log('state is ', store.getState())
