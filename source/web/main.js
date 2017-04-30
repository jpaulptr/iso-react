import React from 'react'
import ReactDOM from 'react-dom';

import App from '../components/app.jsx';
import {store} from '../store/store';

const mount = document.getElementById('Main');

/* eslint-disable react/jsx-filename-extension */
// In at least one place we need to access a react component from js.
ReactDOM.render(<App store={store} />, mount);
/* eslint-enable */
