//import React from 'react';
//import {Route, BrowserRouter} from "react-router-dom"
//import LeftEyePage from './pages/LeftEyePage';
//import RightEyePage from './pages/RightEyePage';
//import Header from './pages/header';

//class App extends React.Component{
  //render()
  //{
    //return (
      //<BrowserRouter>
        //<Route exact path="/" Component={Header}/>
        //<Route path="/LeftEyePage" Component={LeftEyePage}/>
        //<Route path="/RightEyePAage" Component={RightEyePage}/>
      //</BrowserRouter>
    //)
  //}
//}
//export default App

import React from 'react';
import {PropTypes} from "prop-types"
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;