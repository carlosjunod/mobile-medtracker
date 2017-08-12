import React from 'react'
// import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MedList from './src/containers/MedList'


import medicineReducer from './src/core-modules/reducers'


// const store = createStore(medicineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(medicineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <MedList />
      </Provider>
    )
  }
}
