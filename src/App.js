import React, { Component } from 'react';
import SideNav from './Components/SideNav/SideNav';
import Switch from '@material-ui/core/Switch';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      notificationDays: 0,
      shippingEmail: '',
      billingEmail: '',
      anotherEmail: '',
      phoneNumber: '',
      checkedB: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.slider = this.slider.bind(this);
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  slider = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (

      <div className="App">
      <SideNav/>
      <div className="settings-container">
      <div className="settings-text">
      <div className="toggle">
      <h4>Notifications</h4>
      <Switch
          checked={this.state.checkedB}
          onChange={this.slider('checkedB')}
          value="checkedB"
          color="default"
        />
        </div>

      <p>How many days do you want to pass before a notification is sent?</p>
      <input id="days-counter" name="notificationDays" value={this.state.notificationDays} onChange={this.handleChange} type="number"/>
      <h4>Emails</h4>
      <p>Set the default emails.</p>
      <input className="email-field" placeholder="Shipping:" name="shippingEmail" value={this.state.shippingEmail} onChange={this.handleChange} type="email"/>
      <input className="email-field" placeholder="Billing:" name="billingEmail" value={this.state.billingEmail} onChange={this.handleChange} type="email"/>
      <input className="email-field" placeholder="Another Email:" name="anotherEmail" value={this.state.anotherEmail} onChange={this.handleChange} type="email"/>
      <h4>Text Messages</h4>
      <p>Enter your cell phone number to receive texts from loop minded.</p>
      <input className="email-field" placeholder="Cell Number:" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="text"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
