/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Provider} from 'mobx-react';
import React from 'react';
import Component from './Component';
import Email from './Email';
import store from './store';
import EmailStore from './emailStore';
class App extends React.Component {
  render() {
    const stores = {
      store,
      EmailStore,
    };
    return (
      <Provider {...stores}>
        <Component />
        <Email />
      </Provider>
    );
  }
}

export default App;
