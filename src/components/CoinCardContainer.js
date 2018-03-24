import React from "react";
import { ScrollView, View, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";

import FetchCoinData from "./../actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CoinCardContainer extends React.Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map(coin => (
      <CoinCard
        key={coin.name}
        coin_name={coin.symbol}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
      />
    ));
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
        </View>
      );
    }

    return <ScrollView>{this.renderCoinCards()}</ScrollView>;
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CoinCardContainer);
