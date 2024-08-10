import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import { useStore } from "../../app/store/store";
import Header from "../../widgets/Header/Header";
import Card from "./Card/Card";
import { styles } from "./Main.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const { videos, loading } = useStore();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView style={styles.body}>
        {loading && <Text style={styles.loader}>Loading...</Text>}
        {videos && (
          <View style={styles.dataContainer}>
            {videos.items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
