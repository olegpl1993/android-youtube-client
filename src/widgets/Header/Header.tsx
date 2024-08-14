import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import MySvg from "../../../assets/logo.svg";
import SettingsSVG from "../../../assets/search_settings.svg";
import { RootStackParamList } from "../../app/Router.types";
import { styles } from "./Header.styles";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
  fetchData?: (query: string) => Promise<void>;
  sorting?: string;
  setSorting?: (sorting: string) => void;
  filter?: string;
  setFilter?: (filter: string) => void;
  search?: string;
  setSearch?: (search: string) => void;
};

export default function Header(props: Props) {
  const { navigation, fetchData, sorting, setSorting, filter, setFilter, search, setSearch } =
    props;
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable onPress={() => navigation.navigate("Main")}>
          <MySvg width={50} height={50} />
        </Pressable>

        {fetchData && search !== undefined && (
          <View style={styles.seach}>
            <TextInput
              style={styles.inputSeach}
              onChangeText={setSearch}
              value={search}
              placeholder="Search..."
            />
            <Pressable style={styles.button} onPress={() => fetchData(search.trim())}>
              <Text style={styles.buttonText}>SEARCH</Text>
            </Pressable>
          </View>
        )}

        {fetchData && (
          <Pressable onPress={() => setIsOpenSettings(!isOpenSettings)}>
            <SettingsSVG width={30} height={30} />
          </Pressable>
        )}
      </View>

      {isOpenSettings && setSorting && (
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
