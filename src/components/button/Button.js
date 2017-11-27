import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { subscribe } from '../../socket';

class Button extends Component {
  onClick() {
    return subscribe(
      null,
      'MT_BTN',
      this.props.component_type,
      this.props.flow_id,
      null,
      this.props.language
    );
  }
  render() {
    return (
      <RaisedButton
        label={this.props.label}
        secondary={true}
        onClick={this.onClick.bind(this)}
      />
    );
  }
}
function mapStateToProps(state) {
  return { component_type: state.component_type, language: state.language };
}
export default connect(mapStateToProps)(Button);
