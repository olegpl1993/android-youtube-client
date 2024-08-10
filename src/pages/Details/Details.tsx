import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";
import { styles } from "./Details.styles";
import { useDetailsStore } from "./model/Details.store";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details(props: Props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const { data, loading, error, fetchData } = useDetailsStore();

  useEffect(() => {
    fetchData(id);
  }, [id, fetchData]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.body}>
        {loading && <Text style={styles.loader}>Loading...</Text>}
        {error && <Text style={styles.loader}>Something went wrong...</Text>}
        <Text>Details page: {id}</Text>
        <Text>{data?.items[0].snippet.title}</Text>
      </View>
    </View>
  );
}
