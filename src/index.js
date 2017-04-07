import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import App from './App';
import {LossMartin, WinMartin, Kelly} from './pages'

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/loss-martin" component={LossMartin}/>
      <Route path="/win-martin" component={WinMartin}/>
      <Route path="/kelly" component={Kelly}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <BasicExample/>, document.getElementById('react-app'));
