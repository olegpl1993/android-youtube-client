import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Loader from "../../shared/components/Loader/Loader";
import VideoStats from "../../shared/components/VideoStats/VideoStats";
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

      {loading && <Loader />}

      <ScrollView style={styles.body}>
        {error && <Text style={styles.error}>Something went wrong...</Text>}
        {data && (
          <View style={styles.content}>
            <Text style={styles.date}>
              {new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(data?.items[0].snippet.publishedAt))}
            </Text>

            <Text style={styles.title}>{data?.items[0].snippet.title}</Text>

            <Image
              source={{ uri: data.items[0].snippet.thumbnails.high.url }}
              style={styles.image}
            />

            <VideoStats
              views={data.items[0].statistics.viewCount}
              likes={data.items[0].statistics.likeCount}
              comments={data.items[0].statistics.commentCount}
            />

            <Text style={styles.description}>{data.items[0].snippet.description}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
