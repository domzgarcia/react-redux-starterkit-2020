import React from 'react';
import { render } from 'react-dom';
import Boot from './boot';
import * as serviceWorker from './serviceWorker';

const targetRoot = document.querySelector('#root');

render(
  <Boot />,
  targetRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
