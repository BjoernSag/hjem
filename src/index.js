import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store'
import * as serviceWorker from './serviceWorker';

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(
  <Store
    hideLoader={hideLoader}
    showLoader={showLoader}
    />,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
