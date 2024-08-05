import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details(props: Props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.body}>
        <Text>Details page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
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
});
