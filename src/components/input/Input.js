import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../actions';
import { subscribe } from '../../socket';
import './input.css';
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  submitComment(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({
        text: ''
      });
      subscribe(
        event.target.value,
        'MT_TXT',
        this.props.component_type,
        this.props.flow_id,
        null,
        this.props.language
      );
      const message = {
        header: 'MT_TXT',
        text: event.target.value,
        component_type: this.props.component_type,
        flag: 'own',
        language: this.props.language
      };
      this.props.sendMessage(message);
    }
  }
  clickSend() {
    subscribe(
      this.state.text,
      'MT_TXT',
      this.props.component_type,
      this.props.flow_id,
      null,
      this.props.language
    );
    const message = {
      header: 'MT_TXT',
      text: this.state.text,
      component_type: this.props.component_type,
      flag: 'own',
      language: this.props.language
    };
    this.props.sendMessage(message);

    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <footer class="cm-message-type">
        <input
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.submitComment.bind(this)}
          type="text"
          placeholder="Type a message…"
          autoFocus
        />
        <button
          className="cm-send"
          name=""
          type=""
          onClick={this.clickSend.bind(this)}
        />
      </footer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}
function mapStateToProps(state) {
  return {
    component_type: state.component_type,
    language: state.language
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);
