import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { subscribe } from '../../socket';
import { switchLanguage, switchCT, flowID, sendMessage } from '../../actions';

class Menu extends Component {
  onClick(flow, eve, chips) {
    this.props.flowID(flow);
    this.props.switchCT(eve);
    console.log(chips);
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
    console.log('from menu', this.props);
    return (
      <div style={{ position: 'fixed', bottom: 0, marginLeft: 0 }}>
        <IconMenu
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem
            primaryText="FAQ"
            onClick={() => this.onClick('EL_F', 'CT_FAQ', null)}
          />
          <MenuItem
            primaryText="Event"
            onClick={() => this.onClick('EL_00', 'CT_EVENT', 'MT_CHIPS')}
          />
          <MenuItem primaryText="English" />
          <MenuItem primaryText="Swedish" />
        </IconMenu>
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
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
