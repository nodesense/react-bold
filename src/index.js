import 'core-js';

// bootstrap file, loading react app into browser
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';

//webpack, pick this css and make a seperate file
import "./index.css";

import store from './app/store';

// provider pass store to child container components through context
import {Provider} from 'react-redux';

// put virtula dom into real dom
// react will create object for App class, calls render method, take v.dom
// then patch the real dom
ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
                , 
                document.getElementById('root'));
