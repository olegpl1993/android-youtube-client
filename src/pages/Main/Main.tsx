import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import { SearchItemData, SearchResultList } from "../../shared/styles/types";
import Header from "../../widgets/Header/Header";
import Card from "./Card/Card";
import { styles } from "./Main.styles";

// private apiKey = 'AIzaSyBoa9dWd02Nvz0RPSHYKXAHgd2nKAEAHu8';
const apiKey = "AIzaSyB9rWiwNDGbsAKgwcnQOTIwp87QGmaiU7Y";
const baseUrl = "https://www.googleapis.com/youtube/v3/";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const [moreData, setMoreData] = useState<SearchResultList | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query: string) => {
    const url = `${baseUrl}search?part=snippet&q=${query}&type=video&maxResults=20&key=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      const ids = json.items.map((item: SearchItemData) => item.id.videoId);
      getMoreData(ids);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoreData = async (videoIds: string[]) => {
    const stringIds = videoIds.join(",");
    const url = `${baseUrl}videos?part=snippet,statistics&id=${stringIds}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMoreData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} fetchData={fetchData} />

      <ScrollView style={styles.body}>
        {loading && <Text style={styles.loader}>Loading...</Text>}
        {moreData && (
          <View style={styles.dataContainer}>
            {moreData.items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
