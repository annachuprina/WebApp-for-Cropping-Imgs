import React, { Component } from 'react';
import './App.css';
import Header from './header'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './store/configureStore'
let { store, persistor } = configureStore()
class App extends Component {
   render() {
       return(<Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                   <div className="App">
                       <Header/>
                   </div>
               </PersistGate>
           </Provider>
       );
   }}
export default App;