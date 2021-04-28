import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { combinedReducer } from './reducer'

export default function App() {

  const store = createStore(combinedReducer)

  return (
    <Provider store={store}>
      <PaperProvider >
        <AppNavigation></AppNavigation>
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent("Expenses", () => App);