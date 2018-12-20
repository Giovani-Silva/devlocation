import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import './config/reactotron';
import store from './store';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
