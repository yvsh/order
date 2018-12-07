import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Header from '../Header';
import OrderList from '../OrderList';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <OrderList />
      </div>
    );
  }
}


