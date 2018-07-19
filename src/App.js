import React, { Component } from 'react';
import SideNav from './Components/SideNav/SideNav';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      notificationDays: 0,
      shippingEmail: '',
      billingEmail: '',
      anotherEmail: '',
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
    });
}

  render() {
    return (
      <div className="App">
      <SideNav/>
      <div className="settings-container">
      <div className="settings-text">
      <h4>Notifications</h4>
      <span>How many days do you want to pass before a notification is sent?</span>
      <input id="days-counter" name="notificationDays" value={this.state.notificationDays} onChange={this.handleChange} type="number"/>
      <h4>Emails</h4>
      <span>Set the default emails.</span>
      <input className="email-field" placeholder="Shipping:" name="shippingEmail" value={this.state.shippingEmail} onChange={this.handleChange} type="email"/>
      <input className="email-field" placeholder="Billing:" name="billingEmail" value={this.state.billingEmail} onChange={this.handleChange} type="email"/>
      <input className="email-field" placeholder="Another Email:" name="anotherEmail" value={this.state.anotherEmail} onChange={this.handleChange} type="email"/>
      <h4>Text Messages</h4>
      <span>Enter your cell phone number to receive texts from loop minded.</span>
      <input className="email-field" placeholder="Cell Number:" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="text"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
