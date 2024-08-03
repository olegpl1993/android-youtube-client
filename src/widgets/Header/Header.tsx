import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
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
