import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Profile from './components/Profile';

const App = StackNavigator(
  {
    Login: { screen: Login },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: {
      header: false,
    }
  }
);

export default App;