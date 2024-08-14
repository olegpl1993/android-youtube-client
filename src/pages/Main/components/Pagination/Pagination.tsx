import { Pressable, Text, View } from "react-native";
import { styles } from "./Pagination.styles";

interface Props {
  fetchData: (query: string, pageToken?: string) => void;
  nextPageToken: string | null;
  prevPageToken: string | null;
  search: string;
}
export default function Pagination(props: Props) {
  const { fetchData, nextPageToken, prevPageToken, search } = props;

  return (
    <View style={styles.container}>
      {prevPageToken && (
        <Pressable
          style={styles.button}
          onPress={() => {
            fetchData(search.trim(), prevPageToken);
          }}
        >
          <Text style={styles.buttonText}>Prev Page</Text>
        </Pressable>
      )}

      {nextPageToken && (
        <Pressable
          style={styles.button}
          onPress={() => {
            fetchData(search.trim(), nextPageToken);
          }}
        >
          <Text style={styles.buttonText}>Next Page</Text>
        </Pressable>
      )}
    </View>
  );
}
