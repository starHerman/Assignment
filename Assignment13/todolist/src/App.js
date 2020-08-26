import React, { Component } from 'react'
import Item from './Item'
import "bootstrap/dist/css/bootstrap.min.css";
import List from './List';
import {Provider} from 'react-redux'
import store from './store/index'
 class App extends Component {
   render(){
     return (
       <Provider store={store}>
         <List></List>
       </Provider>
     );
   }
}

export default App
