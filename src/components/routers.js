import React from 'react';
import { Route } from 'react-router';
import App from '../pages/App';
import Header from '../pages/header';
import LeftEyePage from '../pages/LeftEyePage';
import RightEyePage from '../pages/LeftEyePage';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={Header}/>
    <Route path="/LeftEyePage" component={LeftEyePage} />
    <Route path="/RightEyePage" component={RightEyePage} />
  </Route>
);