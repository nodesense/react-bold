import React from 'react';

// default import, alias by default
import HeaderEx from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';

import ReduxCounter from './counter/containers/ReduxCounter';


import {BrowserRouter as Router,
        Route, 
        Switch,
        Redirect} from 'react-router-dom';

// class component
// object, member functions, state
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 1000,
            flag: true
        }
    }

    // send reset function as props to Counter component
    reset = () => {
        this.setState({
            startValue: 0
        })
    }


    toggle = () => {
        this.setState({flag: !this.state.flag})
    }
    // react keyword
    // create virtuald and return virtual dom whenever it has been called
    render() {
        console.log('App render');
         return (
             <Router>
             <div >
                  <HeaderEx title="Product App" />

                <Switch>
                    <Route path="/" component={Home}  exact />  
                    <Route path="/cart" component={Cart} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/redux-counter" component={ReduxCounter} />
                    
                    {/* <Redirect from="/old-contact" to="/contact" /> */}

                    <Route path="*" component={NotFound} />
                  </Switch>

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
             </Router>
         );
    }
}