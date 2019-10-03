import React from 'react'
import ReactDOM from 'react-dom';
import Header from './pages/header'
import './index.css'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import LeftEyePage from './pages/LeftEyePage';
import RightEyePage from './pages/RightEyePage';
//import ImgProvider from "../providers/ImgProvider"
//import * as registerServiceWorker from './serviceWorker';
 
ReactDOM.render((
    <Router>
      <Route exact path="/" component={Header} />
      <Route path="/LeftEyePage" component={LeftEyePage} />
      <Route path="/RightEyePage" component={RightEyePage} />
    </Router>
  ), document.getElementById('root'));