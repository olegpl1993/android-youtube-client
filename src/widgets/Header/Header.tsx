import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import MySvg from "../../../assets/logo.svg";
import SettingsSVG from "../../../assets/search_settings.svg";
import { RootStackParamList } from "../../app/Router.types";
import { useStore } from "../../app/store/store";
import { styles } from "./Header.styles";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
};

export default function Header(props: Props) {
  const { navigation } = props;
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [sorting, setSorting] = useState<string>("date");
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
  const { fetchVideos } = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <MySvg width={50} height={50} onPress={() => navigation.navigate("Main")} />

        <View style={styles.seach}>
          <TextInput
            style={styles.inputSeach}
            onChangeText={setSearch}
            value={search}
            placeholder="Search..."
          />
          <Button title="Search" onPress={() => fetchVideos(search)} />
        </View>

        <SettingsSVG width={30} height={30} onPress={() => setIsOpenSettings(!isOpenSettings)} />
      </View>

      {isOpenSettings && (
        <View style={styles.settings}>
          <View style={styles.row}>
            <Text style={styles.text}>Sorting by:</Text>
            <Text
              style={[
                styles.select,
                { textDecorationLine: sorting === "date" ? "underline" : "none" },
              ]}
              onPress={() => setSorting("date")}
            >
              date
            </Text>
            <Text
              style={[
                styles.select,
                { textDecorationLine: sorting === "views" ? "underline" : "none" },
              ]}
              onPress={() => setSorting("views")}
            >
              count of views
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Filter by word</Text>
            <TextInput style={styles.input} onChangeText={setFilter} value={filter} />
          </View>
        </View>
      )}
    </View>
  );
}
