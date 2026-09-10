import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import Toast from './components/Toast';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route component={ProductList} />
        </Switch>
        <div className="footer-note">
          <i className="fas fa-credit-card" style={{ marginRight: '6px' }}></i>
          Secure checkout · Free shipping over $50
        </div>
      </div>
      <Modal />
      <Toast />
    </React.Fragment>
  );
}

export default App;
