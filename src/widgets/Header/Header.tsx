/* eslint-disable import/no-unresolved */
import { StyleSheet, Text, View } from "react-native";
import MySvg from "../../../assets/logo.svg";

const App = () => {
  return (
    <View style={styles.container}>
      <MySvg width={50} height={50} onClick={() => console.log("click")} />
      <Text style={styles.text}>Header!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 50,
    gap: 10,
  },

  img: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
  },
});
