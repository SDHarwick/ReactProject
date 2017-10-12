// Application entrypoint.

/* eslint-disable global-require */
// require('babel-polyfill');
/* eslint-enable global-require */

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import App from './App.jsx';
import Base from './Base.jsx';
// import Blocks from './Blocks.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));
ReactDOM.render(<Base />, document.getElementById('base'));
// ReactDOM.render(<Blocks />, document.getElementById('blocks'));