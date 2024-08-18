import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Loader from "../../shared/components/Loader/Loader";
import Header from "../../widgets/Header/Header";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import { styles } from "./Main.styles";
import { useMainStore } from "./model/Main.store";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const {
    loading,
    error,
    nextPageToken,
    prevPageToken,
    sorting,
    filter,
    search,
    getProcessedData,
    fetchData,
    setSorting,
    setFilter,
    setSearch,
  } = useMainStore();

  const processedData = getProcessedData();

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        fetchData={fetchData}
        sorting={sorting}
        setSorting={setSorting}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      {loading && <Loader />}

      <ScrollView style={styles.body}>
        {error && <Text style={styles.error}>Something went wrong...</Text>}
        {processedData && (
          <View style={styles.dataContainer}>
            {processedData.map((item) => (
              <Card key={item.id} item={item} navigation={navigation} />
            ))}
          </View>
        )}

        {processedData && (
          <Pagination
            fetchData={fetchData}
            nextPageToken={nextPageToken}
            prevPageToken={prevPageToken}
            search={search}
          />
        )}
      </ScrollView>
    </View>
  );
}
