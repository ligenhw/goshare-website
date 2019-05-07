import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mainPages } from './index'
import { history } from '../store/configureStore'

it('route all pages', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  mainPages.forEach( page => {
      history.push(page.path)
  })
  ReactDOM.unmountComponentAtNode(div);
});