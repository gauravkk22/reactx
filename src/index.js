import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/index.scss';
import {Router, Route,browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/login" component={App}/>
  </Router>
  ,
  document.getElementById('root')
);
