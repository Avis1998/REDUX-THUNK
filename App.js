import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppNavigation from './src/Navigation';
import {NotificationService} from './src/services/Notification';

export default () => (
  <Provider store={store}>
    <AppNavigation />
    <NotificationService />
  </Provider>
);
