import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class CoinCardContainer extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 50 }}>TEST</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps)(CryptoCardContainer);
