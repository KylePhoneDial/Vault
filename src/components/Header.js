import React from "react";
import { View, Text } from "react-native";

import Styles from "./../styles/Styles";

const Header = () => {
  return (
    <View style={Styles.headerContainer}>
        <View style={Styles.headerUpperRow}>
            <Text style={Styles.headerTitleFont}>Vault</Text>
        </View>
        <View style={Styles.headerLowerRow}>
            <Text style={Styles.labelFont}>Coin</Text>
            <Text style={Styles.labelFont}>Holdings</Text>
            <Text style={Styles.labelFont}>Price</Text>
        </View>
    </View>
  );
};

export default Header;
