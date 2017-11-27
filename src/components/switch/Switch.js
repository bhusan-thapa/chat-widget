import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

const Switch = () =>
  <div style={styles.block}>
    <Toggle label="Simple" style={styles.toggle} />
  </div>;

export default Switch;
