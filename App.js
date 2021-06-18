/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import HomeScreen from './src/screens/HomeScreen';

import store from './redux/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </Provider>
);
