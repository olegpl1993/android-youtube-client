import { Text, View } from "react-native";
import Group from "../../../../assets/Group9.svg";
import LikedSVG from "../../../../assets/liked.svg";
import ViewedSVG from "../../../../assets/viewed.svg";
import { styles } from "./VideoStats.styles";

interface Props {
  views: string;
  likes: string;
  comments: string;
}

export default function VideoStats(props: Props) {
  const { views, likes, comments } = props;

  return (
    <View style={styles.stats}>
      <View style={styles.statsItem}>
        <ViewedSVG width={22} height={18} />
        <Text>{views}</Text>
      </View>

      <View style={styles.statsItem}>
        <LikedSVG width={18} height={18} />
        <Text>{likes}</Text>
      </View>

      <View style={styles.statsItem}>
        <Group width={18} height={18} />
        <Text>{comments}</Text>
      </View>
    </View>
  );
}
