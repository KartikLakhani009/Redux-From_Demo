/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootreducer from './src/reducer/index';

//Screen
// import RegistrationForm from './src/screen/UserFrom/RegistrationForm';
import Hello from './src/screen/Redux-From/Hello';

const store = createStore(rootreducer);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
