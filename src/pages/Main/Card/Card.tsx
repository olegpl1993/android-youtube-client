import { Button, Image, Text, View } from "react-native";
import DislikeSVG from "../../../../assets/dislike.svg";
import Group from "../../../../assets/Group9.svg";
import LikedSVG from "../../../../assets/liked.svg";
import ViewedSVG from "../../../../assets/viewed.svg";
import { SearchItemData } from "../../../shared/styles/types";
import { styles } from "./Card.styles";

interface Props {
  item: SearchItemData;
}

export default function Card(props: Props) {
  const { item } = props;

  return (
    <View key={item.id.videoId} style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.image} />

        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <ViewedSVG width={22} height={18} />
            <Text>123</Text>
          </View>

          <View style={styles.statsItem}>
            <LikedSVG width={18} height={18} />
            <Text>1234</Text>
          </View>

          <View style={styles.statsItem}>
            <DislikeSVG width={18} height={18} />
            <Text>123412</Text>
          </View>

          <View style={styles.statsItem}>
            <Group width={18} height={18} />
            <Text>1235</Text>
          </View>
        </View>

        <Text style={styles.title}>{item.snippet.title}</Text>

        <View style={styles.buttonContainer}>
          <Button title="more..." onPress={() => console.log("Details")} />
        </View>
      </View>

      <View style={styles.dateColorRow} />
    </View>
  );
}
