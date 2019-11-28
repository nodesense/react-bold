import React from 'react';

// default import, alias by default
import HeaderEx from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

// class component
// object, member functions, state
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 1000
        }
    }

    // send reset function as props to Counter component
    reset = () => {
        this.setState({
            startValue: 0
        })
    }

    // react keyword
    // create virtuald and return virtual dom whenever it has been called
    render() {
        console.log('App render');
         return (
             <div >
                  <HeaderEx title="Product App" />

                  <Counter startValue={this.state.startValue} 
                           reset={this.reset}
                  />

                  <Footer title={"Product App"}
                          year={2018  + 1}  
                  > 
                     {/* content children */}
                    <div>
                        <p>Contact: +91 91111 11111</p>
                        <p>Contact: +91 92222 22222</p>

                    </div>
                   
                  </Footer>
             </div>
         );
    }
}