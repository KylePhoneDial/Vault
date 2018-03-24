import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider} from 'react-redux';

import Styles from './src/styles/Styles.js';
import Store from './src/Store';
import CoinCardContainer from './src/components/CoinCardContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={Styles.main}>
          <CoinCardContainer />
        </View>
      </Provider>
    );  
  }
}
