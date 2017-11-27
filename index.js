import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './src/App';
import ChatWidget from './src/ChatWidget';
import reducers from './src/reducers';
const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('el-chatbot')
);
