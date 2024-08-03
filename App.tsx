import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Hello my app!</Text>
      <View style={styles.row}>
        <Text style={styles.button} onPress={() => setCount(count + 1)}>
          Plus
        </Text>
        <Text style={styles.button} onPress={() => setCount(count - 1)}>
          Minus
        </Text>
      </View>

      <Text style={styles.count}>Count: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },

  button: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: 100,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  count: {
    color: "red",
    fontSize: 30,
  },
});
