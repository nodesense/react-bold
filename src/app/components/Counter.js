import React, {Component} from 'react';
 //React.Component === Component
 
class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        // state, component state, stateful component
        // state is a react keyword
        // this.state is mutable
        // but 'state object' should be immutable 
        this.state = {
            counter: this.props.startValue
        }
 
        // ES5 style
        this.increment = this.increment.bind(this)
    }

    // bind/ es5, 
    increment() {
        console.log('increment called')
        //BAD
        this.state.counter++; // should be immutable
        console.log('counter is ', this.state.counter);

        // keyword
        // trigger the render
        this.forceUpdate() ; // not recommended
        this.forceUpdate() ; // not recommended
    }

    //ES6, without bind
    decrement() {
        //GOOD
        // react keyword
        // accept new state as input
        // queue the state updates
        // async method

        console.log('counter is ', this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })
        console.log('counter is ', this.state.counter);
    }

    //ES.NEXT, Stage 2, resolve this, create single instance of the function
    // recommended approach
    multiply = () => {
        console.log('multiply called ', this.state);
        this.setState({
            counter: this.state.counter * 2
        })
    }

    // setState with callback, call render multiple times
    // not recommended
    incrementTwice = () => {
        this.setState({
            counter: this.state.counter + 1
        },  () => {
            //callback function, called after state merge, after render call
            console.log('setState callback');
            this.setState({
                counter: this.state.counter + 1
            })
        } )
    }

    //functional setState
    //recommended approach to update state
    incrementThrice = () => {
        console.log('incrementThrice begin');
        this.setState(function (state) {
            console.log('func setstate 1', state);
            //return new state
            return {
                counter: state.counter + 1
            }
        })

        //es6 way
        this.setState((state) => {
            console.log('func setstate 2', state);
            return {
                counter: state.counter + 1
            }
        })

        this.setState((state) => ({
                counter: state.counter + 1
        }));

        console.log('incrementThrice end');
    }

    reset = (e) => {
        console.trace('trace');
        this.props.reset();
    }
 
    // called at very first time, when component created
    render() {
        console.log('Counter render');
        return (
            <div>

                <h2>Counter {this.state.counter}</h2>
                <h2>StartValue {this.props.startValue}</h2>
                
                <button onClick={this.increment}>+1</button>
                {/* ES6 way of arrow op to solve this context */}
                <button onClick={ () => this.decrement() }> -1 </button>

                <button onClick={this.multiply}> * 2 </button>

                <div onClick={this.multiply}>
                    <div onClick={this.multiply}>
                    <button onClick={this.multiply}> * 2 bubble </button>
                    </div>
                </div>

                <button onClick={this.incrementTwice}> +1 Twice </button>

                <button onClick={this.incrementThrice}> +1 Thrice </button>
            
                <button onClick={ () =>  this.props.reset() }> Reset 1 </button>
                <button onClick={this.props.reset}> Reset 2 </button>
                <button onClick={this.reset}> Reset 3</button>

                
            </div>
        )
    }
}

export default Counter;