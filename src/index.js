import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history } from './store/configureStore'

const render = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root'),
	);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

history.listen((location) => {
	if (window.ga) {
	  window.ga('send', 'pageview', location.pathname);
	}
  });