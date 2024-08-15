import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../shared/styles/variables";
import { styles } from "./Loader.styles";

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primaryBlue} />
    </View>
  );
}
