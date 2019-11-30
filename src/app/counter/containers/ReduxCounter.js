import {connect} from 'react-redux';
import ReduxCounter from '../components/ReduxCounter';
import {bindActionCreators} from 'redux';

// actions is imported as object, contains all the methods exported
import * as actions from '../state/actions';


// state = store.getState() ==> {counter: 100}
// return set of properties needed for ReduxCounter component
// when this method is invoked?
// very first time, when component instance created
// after every dispatch, [container always subscribe from store]
export function mapStateToProps(state) {
    console.trace()
    console.log('Counter mapStateToProps', state)
    return {
        //propName: value from state
        counter: state.counter,
        title: "Hello"
    }
}

//FIXME: mapDispatchToProps

// dispatch = store.dispatch
// return set of functions as props
// props.incrementBy2
// when the method is called? 
// only once, during component creation/initializaiton
export function mapDispatchToProps(dispatch) {
    console.log('Counter container mapDispatchToProps');

    return {
        // propName: function ref
        incrementBy2: function () {
            // custom code
            const action = actions.increment(2);
            dispatch(action);
        },
        // wrapper function, that automatically dispatch
        increment: bindActionCreators(actions.increment, dispatch),
        // object that contains wrapper functions that can dispatch
        counterDispatchers: bindActionCreators(actions, dispatch)
    }
}

const decoratorFunc = connect(mapStateToProps, mapDispatchToProps);
// returns a container component, that wrap ReduxCounter component as child
// containers are pure component by default

// Container get store {dispatch and getState} from react context, Provider

const Container = decoratorFunc(ReduxCounter);

export default Container;