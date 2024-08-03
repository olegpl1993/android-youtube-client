import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./src/pages/Main/Main";

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
    padding: 5,
    paddingTop: 30,
  },
});
