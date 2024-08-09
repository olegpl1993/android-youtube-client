import { Button, Image, Text, View } from "react-native";
import Group from "../../../../assets/Group9.svg";
import LikedSVG from "../../../../assets/liked.svg";
import ViewedSVG from "../../../../assets/viewed.svg";
import { SearchItem } from "../../../shared/styles/types";
import { styles } from "./Card.styles";
import { timeToColor } from "./timeToColor";

interface Props {
  item: SearchItem;
}

export default function Card(props: Props) {
  const { item } = props;

  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.image} />

        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <ViewedSVG width={22} height={18} />
            <Text>{item.statistics.viewCount}</Text>
          </View>

          <View style={styles.statsItem}>
            <LikedSVG width={18} height={18} />
            <Text>{item.statistics.likeCount}</Text>
          </View>

          <View style={styles.statsItem}>
            <Group width={18} height={18} />
            <Text>{item.statistics.commentCount}</Text>
          </View>
        </View>

        <Text style={styles.title}>{item.snippet.title}</Text>

        <View style={styles.buttonContainer}>
          <Button title="more..." onPress={() => console.log("Details")} />
        </View>
      </View>

      <View
        style={[styles.dateColorRow, { backgroundColor: timeToColor(item.snippet.publishedAt) }]}
      />
    </View>
  );
}
