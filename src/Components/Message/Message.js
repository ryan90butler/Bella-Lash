import React, { Component } from 'react';
import './Message.css';
import remove from '../../Assets/delete.png';
import back from '../../Assets/back.png';

class Message extends Component {
  render() {
    return (
      <div className="Message">
      <div className ="top-bar">
      <img src={back}/>
      <span>New Conversation</span>
      <img src={remove}/>
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
      <input type="text" />
      </div>
      </div>
    );
  }
}

export default Message;