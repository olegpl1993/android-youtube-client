import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import MySvg from "../../../assets/logo.svg";
import { RootStackParamList } from "../../app/Router.types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
};

export default function Header(props: Props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <MySvg width={50} height={50} onPress={() => navigation.navigate("Main")} />
      <Text style={styles.text}>Header!</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

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

  text: {
    fontSize: 20,
  },
});
