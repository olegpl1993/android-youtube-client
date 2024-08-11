import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";
import Card from "./components/Card/Card";
import { styles } from "./Main.styles";
import { useMainStore } from "./model/Main.store";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const { data, loading, error, fetchData } = useMainStore();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} fetchData={fetchData} />

      <ScrollView style={styles.body}>
        {loading && <Text style={styles.loader}>Loading...</Text>}
        {error && <Text style={styles.loader}>Something went wrong...</Text>}
        {data && (
          <View style={styles.dataContainer}>
            {data.items.map((item) => (
              <Card key={item.id} item={item} navigation={navigation} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
