import React from 'react';
import Button from '../button/Button';
import Chip from '../chips/Chips';
import TxtButton from '../textButton/textButton';
import Date from '../date-picker/DatePicker';
import { subscribe } from '../../socket';

const Show = props => {
  if (props.messages.module_type === 'MT_BTN') {
    return (
      <Button label={props.messages.text} flow_id={props.messages.flowId} />
    );
  } else if (props.messages.module_type === 'MT_CHIPS') {
    return (
      <div className="cm-chat cm-message-bot">
        <div className="cm-avatar" />
        <Chip subtype={props.messages.sub_type} />
      </div>
    );
  } else if (props.messages.module_type === 'MT_DATE') {
    return (
      <div className="cm-chat cm-message-bot">
        <div className="cm-avatar" />
        <div className="cm-message">
          <Date />
        </div>
      </div>
    );
  } else if (props.messages.flag === 'own') {
    return (
      <div className="cm-chat cm-message-human">
        <div className="cm-avatar" />
        <div className="cm-message">
          {props.messages.text}
        </div>
      </div>
    );
  } else if (props.messages.module_type === 'MT_BEGIN') {
    return (
      <div>
        <TxtButton
          msg={'Do you have questions regarding the app functionalities?'}
        />
      </div>
    );
  } else if (props.messages.module_type === 'MT_END') {
    return (
      <div>
        <TxtButton msg={props.messages.text} flag={'end'} />
      </div>
    );
  } else {
    return (
      <div className="cm-chat cm-message-bot">
        <div className="cm-avatar" />
        <div className="cm-message">
          {props.messages.text}
        </div>
      </div>
    );
  }
};
export default Show;
