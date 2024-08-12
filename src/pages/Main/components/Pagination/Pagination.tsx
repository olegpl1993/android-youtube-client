import { Button, View } from "react-native";
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
        <Button
          title="Prev Page"
          onPress={() => {
            fetchData(search.trim(), prevPageToken);
          }}
        />
      )}

      {nextPageToken && (
        <Button
          title="Next Page"
          onPress={() => {
            fetchData(search.trim(), nextPageToken);
          }}
        />
      )}
    </View>
  );
}
