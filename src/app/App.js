import React from 'react';

// default import, alias by default
import HeaderEx from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';

import ReduxCounter from './counter/containers/ReduxCounter';
// import ReduxCart from './cart/containers/Cart';

// for code splitting and lazy loading
import Loadable from 'react-loadable';

import ThemeContext from './components/ThemeContext';

import {BrowserRouter as Router,
        Route, 
        Switch,
        Redirect} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

function Loading() {
    return (
        <h2>Loading component....</h2>
    )
}
        
// Component
const LoadableCart = Loadable({
    // split the bundle, load the bundle dynamically [webpack]
    loader: () => import('./cart/containers/Cart'),
    // place holder comp to show loading status
    loading: Loading
})


// class component
// object, member functions, state
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 1000,
            flag: true,
            theme: 'red'
        }
    }

    // send reset function as props to Counter component
    reset = () => {
        this.setState({
            startValue: 0
        })
    }

    changeBlue = () => {
        this.setState({
            theme: 'blue'
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
                 <ThemeContext.Provider value={this.state.theme} >
             <div >
                 <button onClick={this.changeBlue}>Blue</button>

                  <HeaderEx title="Product App" />

                <Switch>
                    <Route path="/" component={Home}  exact />  
                    <PrivateRoute path="/cart" component={Cart} />
                    <PrivateRoute path="/counter" component={Counter} />
                    <PrivateRoute path="/contact" component={Contact} />
                    <Route path="/redux-counter" component={ReduxCounter} />
                    
                    <Route path="/redux-cart" component={LoadableCart} />
                    <Route path="/login" component={Login} />
                    
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
             </ThemeContext.Provider>
             </Router>
         );
    }
}