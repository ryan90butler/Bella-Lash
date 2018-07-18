import React, { Component } from 'react';
import './SideNav.css';
import dashboard from '../../Assets/dashboard.png';
import description from '../../Assets/description.png';
import person from '../../Assets/person.png';
import menu from '../../Assets/menu.png'

class SideNav extends Component {
  render() {
    return (
      <div className="nav">
      <div className="TopNav">
      <div className="TopNav-Display">
      <h3>SETTINGS</h3>
      </div>
      <div className="TopNav-Buttons">
      <h3>My Company</h3>
      <h3>Messages</h3>
      <img src={menu}/>
      </div>
      </div>
      <div className="SideNav">
      <div className="SideNav-Icons">
      <hr width="100%" color="white"/>
      <img src={dashboard}/>
      <span>DASHBOARD</span>
      <img src={person}/>
      <span>VENDOR</span>
      <img src={description}/>
      <span>PURCHASE</span>
      </div>
      </div>
      </div>
    );
  }
}

export default SideNav;