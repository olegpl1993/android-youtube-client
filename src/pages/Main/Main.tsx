import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import { DataList } from "../../shared/styles/types";
import Header from "../../widgets/Header/Header";
import { styles } from "./Main.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const [data, setData] = useState<DataList | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query: string) => {
    // private apiKey = 'AIzaSyBoa9dWd02Nvz0RPSHYKXAHgd2nKAEAHu8';
    const apiKey = "AIzaSyB9rWiwNDGbsAKgwcnQOTIwp87QGmaiU7Y";
    const baseUrl = "https://www.googleapis.com/youtube/v3/";
    const url = `${baseUrl}search?part=snippet&q=${query}&type=video&maxResults=20&key=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setData(json);
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
        {data && (
          <View style={styles.dataContainer}>
            {data.items.map((item) => (
              <View key={item.id.videoId} style={styles.card}>
                <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.image} />
                <Text>{item.snippet.title}</Text>
                <Text>{item.snippet.description}</Text>
                <Text>{item.snippet.publishedAt}</Text>
                <Text>{item.snippet.channelTitle}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
