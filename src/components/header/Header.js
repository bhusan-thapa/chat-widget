import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../actions';
import { toggleView, switchLanguage, reSet } from '../../actions';
import { subscribe } from '../../socket';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enButton: '#0c77b1',
      swButton: '#1588c7 '
    };
  }

  onClick(language, button) {
    if (button === 'en') {
      this.setState({
        enButton: '#0c77b1',
        swButton: '#1588c7'
      });
    } else {
      this.setState({
        enButton: '#1588c7 ',
        swButton: '#0c77b1'
      });
    }
    console.log(language);
    this.props.switchLanguage(language);
    subscribe(null, null, null, null, null, language, null);
  }
  render() {
    return (
      <div>
        <header onClick={() => this.props.toggleView(this.props.toggle)}>
          <div className="cm-header">
            <div className="cm-header-img" />
            <div className="cm-header-title">
              <h1>Hello Friend!</h1>
              <p>
                How can I be of service today? Not that I brag, but I can speak
                on multiple languages!
              </p>
            </div>
          </div>
        </header>
        <div className="cm-top-bar">
          <div className="cm-top-bar-left">
            <button
              className="com-header-restart"
              onClick={() => this.props.reSet()}
            >
              Restart Chat
            </button>
          </div>
          <div className="cm-top-bar-right">
            <button
              onClick={() => this.onClick('LANG_ENG', 'en')}
              className="cm-lang"
              style={{ backgroundColor: this.state.enButton }}
            >
              En
            </button>
            <button
              className="cm-lang"
              onClick={() => this.onClick('LANG_SW', 'sw')}
              style={{ backgroundColor: this.state.swButton }}
            >
              Sw
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleView, switchLanguage, reSet }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
