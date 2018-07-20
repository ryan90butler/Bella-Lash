import React, { Component } from 'react';
import './Message.css';
import remove from '../../Assets/delete.png';
import back from '../../Assets/back.png';

class Message extends Component {
  constructor(){
  super()
  this.state={
    message: '',
    viewed: true
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView (){
    this.setState({
      viewed: false
    })
  }
  render() {
    return (
      this.state.viewed ?
      <div className="Message">
      <div className ="top-bar">
      <img src={back}/>
      <span>New Conversation</span>
      <img id="exit-button" onClick={this.changeView} src={remove}/>
      </div>
      <div className="compose">
      <span>+</span>
      <span>#</span>
      </div>
      <div className="message-input">
      <div className="message-buttons">
      <span>Conversation</span>
      <span>Files</span>
      <span>Logs</span>
      </div>
      <input type="text"/>
      </div>
      </div>
      : null
    );
  }
}

export default Message;