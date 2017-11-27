import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../actions';
import Data from './SubChips';
import { subscribe } from '../../socket';
import './chips.css';
class Chips extends Component {
  constructor(props) {
    super(props);
    switch (this.props.subtype) {
      case 'main':
        this.state = { item: Data.ACTIVITY };
        return;
      case 'Christmas Party':
        this.state = { item: Data.X };
        return;
      case 'After Work':
        this.state = { item: Data.AFTER_WORK };
        return;
      case 'Only Dinner':
        this.state = { item: Data.ONLY_DINNER };
        return;
      case 'Catering':
        this.state = { item: Data.CATERING };
        return;
      case 'Create Own Event':
        this.state = { item: Data.OWN_EVENT };
        return;
      case 'Only Hotel':
        this.state = { item: Data.HOTEL };
        return;
      case 'Party':
        this.state = { item: Data.PARTY };
        return;
      case 'Only Transport':
        this.state = { item: Data.ONLY_TRANSPORT };
        return;
      case 'Kick Off':
        this.state = { item: Data.KICKOFF };
        return;
      case 'Conference & Meeting':
        this.state = { item: Data.CONFERENCE };
        return;
    }
  }
  onClick(type, subtype) {
    var day = 0;
    const msg = {
      module_type: type,
      sub_type: subtype
    };
    if (subtype === 'Two days') {
      day = 2;
    }
    if (Data.ACTIVITY.indexOf(subtype) > -1) {
      this.props.sendMessage(msg);
      return subscribe(
        subtype,
        'MT_TXT',
        'CT_EVENT',
        'EL',
        this.props.flow_id,
        this.props.language,
        day
      );
    }
    return subscribe(
      subtype,
      'MT_TXT',
      'CT_EVENT',
      'EL_02',
      this.props.flow_id,
      this.props.language,
      day
    );
  }
  showChip() {
    return this.state.item.map((activity, i) =>
      <button
        class="cm-button"
        onClick={() => this.onClick('MT_CHIPS', activity)}
      >
        {activity}
      </button>
    );
  }
  render() {
    return (
      <div class="cm-message cm-event-buttons">
        {this.showChip()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}
function mapStateToProps(state) {
  return { flow_id: state.flow_id, language: state.language };
}
export default connect(mapStateToProps, mapDispatchToProps)(Chips);
