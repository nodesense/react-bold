import 'core-js';

// bootstrap file, loading react app into browser
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';

//webpack, pick this css and make a seperate file
import "./index.css";

// put virtula dom into real dom
// react will create object for App class, calls render method, take v.dom
// then patch the real dom
ReactDOM.render(<App />, 
                document.getElementById('root'));
