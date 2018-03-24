import React from "react";
import { View, Text } from "react-native";

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h }) => {
  return (
    <View>
      <Text>{symbol}</Text>
      <Text>{coin_name}</Text>
      <Text>{price_usd}</Text>
      <Text>{percent_change_24h}</Text>
    </View>
  );
};

export default CoinCard;
