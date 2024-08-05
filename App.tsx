import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Router from "./src/app/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <Router />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
