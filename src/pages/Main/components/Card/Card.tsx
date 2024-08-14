import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../../../app/Router.types";
import VideoStats from "../../../../shared/components/VideoStats/VideoStats";
import { SearchItem } from "../../../../shared/types";
import { styles } from "./Card.styles";
import { timeToColor } from "./timeToColor";

type Props = {
  item: SearchItem;
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
};

export default function Card(props: Props) {
  const { item } = props;

  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.image} />

        <VideoStats
          views={item.statistics.viewCount}
          likes={item.statistics.likeCount}
          comments={item.statistics.commentCount}
        />

        <Text style={styles.title}>{item.snippet.title}</Text>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => props.navigation.navigate("Details", { id: item.id })}
          >
            <Text style={styles.buttonText}>more...</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={[styles.dateColorRow, { backgroundColor: timeToColor(item.snippet.publishedAt) }]}
      />
    </View>
  );
}
