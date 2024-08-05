import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import MySvg from "../../../assets/logo.svg";
import { RootStackParamList } from "../../app/Router.types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
};

export default function Header(props: Props) {
  const { navigation } = props;
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <MySvg width={50} height={50} onPress={() => navigation.navigate("Main")} />

      <View style={styles.seach}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Search..."
        />

        <Button title="Search" onPress={() => navigation.navigate("Details")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    width: "100%",
    height: 50,
    gap: 10,
  },

  seach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },

  input: {
    fontSize: 20,
    width: 200,
    height: 35,
    backgroundColor: "white",
    padding: 5,
  },
});
