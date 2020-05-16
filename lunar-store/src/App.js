import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>

        <Switch>
          <Route exact path='/' component={ProductList} ></Route>
          <Route path='/details' component={Details} ></Route>
          <Route path='/cart' component={Cart} ></Route>
          <Route component={Default} ></Route>

          {/* <Route exact path="/" component={Landing} /> */}
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </Switch>
        <Modal></Modal>
      </React.Fragment>
    );
  }
}

export default App;
