import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import MySvg from "../../../assets/logo.svg";
import SettingsSVG from "../../../assets/search_settings.svg";
import { RootStackParamList } from "../../app/Router.types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
};

export default function Header(props: Props) {
  const { navigation } = props;
  const [text, setText] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <MySvg width={50} height={50} onPress={() => navigation.navigate("Main")} />

        <View style={styles.seach}>
          <TextInput
            style={styles.inputSeach}
            onChangeText={setText}
            value={text}
            placeholder="Search..."
          />

          <Button title="Search" onPress={() => navigation.navigate("Details")} />
        </View>

        <SettingsSVG width={30} height={30} onPress={() => setIsOpenSettings(!isOpenSettings)} />
      </View>

      {isOpenSettings && (
        <View style={styles.settingsRow}>
          <View style={styles.row}>
            <Text>Sorting by:</Text>
            <Text>date</Text>
            <Text>count of views</Text>
          </View>

          <View style={styles.row}>
            <Text>by word or sentance</Text>
            <TextInput style={styles.input} onChangeText={setFilter} value={filter} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 5,
  },

  topRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "red",
    width: "100%",
    borderWidth: 2,
    gap: 10,
  },

  settingsRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  seach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },

  inputSeach: {
    fontSize: 20,
    width: 200,
    height: 35,
    backgroundColor: "white",
    padding: 5,
  },

  input: {
    fontSize: 20,
    width: 150,
    height: 30,
    backgroundColor: "white",
    padding: 5,
  },
});
