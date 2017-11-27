import React, { Component } from 'react';
import DatePicker from '../date-picker/DatePicker';
import './chat-body.css'

export default class ChatBody extends Component {

  render(){
    return (
      <div class="cm-message-body">
      <ol class="cm-message-list">
      <li class="cm-message-bot">
      <div class="cm-avatar"></div>
      <div class="cm-message">
      <p>Do you have questions regarding the app functionialities? Or you would like to <a href="#">Create new event?</a></p>
      </div>
      </li>
      <li class="cm-message-human">
      <div class="cm-avatar"></div>
      <div class="cm-message">
      <p>I wish to create new event</p>
      </div>
      </li>
      <li class="cm-message-bot">
      <div class="cm-avatar"></div>
      <div class="cm-message">
      <p>Great, can you tell us the time when the event will be held?</p>
      </div>
      </li>
      <li class="cm-message-human">
      <div class="cm-avatar"></div>
      <div class="cm-message">
      <DatePicker />
      </div>
      </li>
      </ol>
      </div>
    );
  }
}
