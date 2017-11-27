import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { subscribe } from '../../socket';
import { switchLanguage, switchCT, flowID, sendMessage } from '../../actions';

import './textButton.css';
import '../comments/comment.css';

class TxtButton extends Component {
  onClick(flow, eve, chips) {
    this.props.flowID(flow);
    this.props.switchCT('CT_EVENT');
    if (chips !== null) {
      const m = {
        module_type: chips,
        sub_type: 'main'
      };
      this.props.sendMessage(m);
    }

    return subscribe(
      chips,
      'MT_TXT',
      eve,
      'EVE',
      this.props.flow_id,
      this.props.language
    );
  }
  render() {
    return (
      <div className="cm-chat cm-message-bot">
        <div className="cm-avatar" />
        <div className="cm-message">
          <div className="cm-message-question">
            <p>
              {this.props.msg}
            </p>
          </div>
          <button
            className="cm-message-button"
            onClick={() => this.onClick('EL_00', 'CT_EVENT', 'MT_CHIPS')}
          >
            Create new event
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    component_type: state.component_type,
    flow_id: state.flow_id
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { switchLanguage, switchCT, flowID, sendMessage },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TxtButton);
