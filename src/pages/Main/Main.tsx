import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../widgets/Header/Header";

const Main = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
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
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    gap: 5,
  },

  body: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 2,
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
