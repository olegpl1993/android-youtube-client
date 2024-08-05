import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.body}>
        <Text>Main page</Text>

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
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: 5,
    gap: 5,
  },

  body: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 2,
    gap: 20,
    backgroundColor: "white",
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
