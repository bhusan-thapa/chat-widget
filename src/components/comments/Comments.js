import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'material-ui/List';
import Header from '../header/Header';
import Input from '../input/Input';
import Show from '../show/Show';
import { listen } from '../../socket';
import { socketReply, flowID } from '../../actions';
import './comment.css';

class Comments extends Component {
  showM() {
    return this.props.message.map((m, i) => <Show key={i} messages={m} />);
  }
  render() {
    return (
      <div className="cm-module">
        <Header />
        <div className="cm-message-body">
          <div className="cm-message-list">
            {this.showM()}
          </div>
        </div>
        <Input flow_id={this.props.flow_id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    reply: state.reply,
    flow_id: state.flow_id,
    language: state.language
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ socketReply, flowID }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
