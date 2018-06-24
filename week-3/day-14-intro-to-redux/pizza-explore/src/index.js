import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,//to tell react where it can find redux package (that is why we are wrapping it with Provider)
  document.getElementById('root'));
