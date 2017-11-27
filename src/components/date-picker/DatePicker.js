import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { subscribe } from '../../socket';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log('date:', date);
    subscribe(
      date,
      'MT_TXT',
      'CT_EVENT',
      this.props.flow_id,
      null,
      this.props.language
    );
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onSelect={this.handleChange}
      />
    );
  }
}
function mapStateToProps(state) {
  return { flow_id: state.flow_id, language: state.language };
}
export default connect(mapStateToProps)(Date);
