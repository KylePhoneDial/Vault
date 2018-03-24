import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import Styles from "./src/styles/Styles.js";
import Store from "./src/Store";
import CoinCardContainer from "./src/components/CoinCardContainer";
import Header from "./src/components/Header";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={Styles.main}>
          <Header />
          <CoinCardContainer />
        </View>
      </Provider>
    );
  }
}
