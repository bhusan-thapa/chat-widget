import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatWidget from './ChatWidget';
import { listen } from './socket';
import { socketReply, flowID, switchCT } from './actions';

class App extends Component {
  render() {
    listen(msg => {
      this.props.flowID(msg.flowId);
      this.props.socketReply(msg);
      if (msg.module_type === 'MT_END') {
        this.props.switchCT('CT_FAQ');
      }
    });
    return <ChatWidget />;
  }
}

function mapStateToProps(state) {
  return { reply: state.reply };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ socketReply, flowID, switchCT }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
