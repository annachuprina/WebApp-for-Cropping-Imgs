import React from 'react'
import ReactDOM from 'react-dom';
import Main from './pages/Main'
import './index.css'
import { Route, BrowserRouter} from 'react-router-dom'
import LeftEyePage from './pages/LeftEyePage';
import RightEyePage from './pages/RightEyePage';
import Preview from './pages/Preview';
import {store} from './store'
import {Provider} from 'react-redux'
//import * as registerServiceWorker from './serviceWorker';
ReactDOM.render((
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/LeftEyePage" component={LeftEyePage}/>
          <Route path="/RightEyePage" component={RightEyePage}/>
          <Route path="/Preview" component={Preview}/>
        </BrowserRouter>
      </Provider>
    </div>
), document.getElementById('root'));
