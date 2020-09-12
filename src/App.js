import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
