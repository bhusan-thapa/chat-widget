import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleView } from './actions';
import Comments from './components/comments/Comments';
import { listen } from './socket';
import '../main.css';

class ChatWidget extends Component {
  render() {
    if (this.props.toggle) {
      return <Comments />;
    }
    return (
      <div
        className="fab"
        onClick={() => this.props.toggleView(this.props.toggle)}
      >
        <span>+</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleView }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatWidget);
