// configure store
import {createStore,
        combineReducers,
        bindActionCreators,
        applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {counterReducer} from './counter/state/reducers/counterReducer';

import cartReducer from './cart/state/cartReducer';


//middlewares.js

export function loggerMiddleware(store) {
    // called during initialization
    return function(nextFunc) {
        // called during initialization
        return function(action) {
            // called for every dispatch
            console.log("ACTION DISPATCH START", typeof action, action);

            // thunk logic
            // if (typeof action === 'function') {
            //     return action(store.dispatch, store.getState);  // return, avoiding next/forward to reducer
            // }

            // forward action to next middleware/reducers
            const result = nextFunc(action); // call all reducers
            console.log("ACTION DISPATCH DONE", action);
            return false;
        }
    }
}

export const cacheMiddleware = ({getState, dispatch}) => next => action => {
    const result = next(action);
    
    if (typeof action === 'object' && action.type.indexOf('COUNTER.') >= 0) {
        const state =  getState();
        localStorage.setItem("counter", state.counter)
    }

    return result;
}

console.log('creating store now');
// createStore internally dispatch action to initialize store 

//authReducer.js
const INITIAL_AUTH_STATE = {
    authenticated: false
}

function authReducer(state = INITIAL_AUTH_STATE, action) {
    switch(action.type) {
        case "LOGGED_IN": 
            return Object.assign({}, state, {authenticated: true})
        case  "LOGGED_OUT":
                        return Object.assign({}, state, {authenticated: false});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer,
    items: cartReducer,
    auth: authReducer
    //...
});

const store = createStore(rootReducer, 
                          {counter: 1000} ,
                          applyMiddleware(loggerMiddleware, cacheMiddleware, thunk),  
                          );
export default store;


// ---

// susbcribe.
// called after dispatch method, called after executing all the reducers, updating state
// returns a unique unsubscribe func, to unsubscribe()

// const unsubscribe1Func = store.subscribe(function callback() {
//     console.log('subscribe 1', store.getState())
// });

// let state = store.getState()
// console.log("counter is ", state.counter)

// let action = {
//     type: INCREMENT,
//     payload: {
//         value: 1
//     }
// }

// // this call state = reducer(state, action)
// console.log('dispatch action')
// store.dispatch(action);
// console.log('state is ', store.getState())


// // unsubscribe
// unsubscribe1Func()


// action = increment(2) // using action creators
// store.dispatch(action);
// console.log('state is ', store.getState())


// // this create a new wrapper function, 
// // that calls the increment with arguments => returns action 
// // and dispatch the action
// const incrementActionDispatcherFunc = bindActionCreators(increment, store.dispatch);

// incrementActionDispatcherFunc(7);
// console.log('state is ', store.getState())

// const {dispatch, getState} = store;

// const resetActionDispatcher = bindActionCreators(reset, dispatch);
// resetActionDispatcher();
// console.log('state is ', store.getState())

// // actions is an object, contains 3 functions
// const actions = {
//     increment: increment, 
//     decrement, 
//     reset
// }

// // bind all actions inside objects
// // returns an object contains 3 binded functions {increment, decrement, reset binded already}
// const actionsDispatcher = bindActionCreators(actions, dispatch);

// actionsDispatcher.decrement(2);
// console.log('state is ', store.getState())

// // an action creator returns a function as action
// function delayedIncrementActionCreator(value) {
//     console.log('start delayedIncrementActionCreator')
    
//     // called by middleware, store is passed from middleware
//     return function(dispatch, getState) {
//         console.log('async function is called');
//         setTimeout( () => {
//             console.log('inside timeout delayedIncrementActionCreator')
//             const action = increment(value);
//             dispatch(action);
//             console.log('state is ', getState());
//          }, 5000);
//     }
//      console.log('end delayedIncrementActionCreator')
// }

// const actionFunc = delayedIncrementActionCreator(10);
// dispatch(actionFunc); // dispatching function as action
