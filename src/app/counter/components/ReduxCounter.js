import React from 'react';

function ReduxCounter(props) {
    console.log('ReduxCounter render called', props)
    return (
        <div>
            <h2>Counter</h2>
            <span>Count {props.counter}</span>
            <button onClick={ () => props.increment(1) }> +1 </button>
            <button onClick={ () => props.counterDispatchers.increment(1) }> 
                    +1 
            </button>
            <button onClick={ () => props.counterDispatchers.decrement(1) }> 
                    -1 
            </button>
            <button onClick={props.counterDispatchers.reset}> 0 </button>
            <button onClick={props.incrementBy2}> +2 </button>
            
        </div>
    )
}

export default ReduxCounter;