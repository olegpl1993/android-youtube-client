import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";
import { styles } from "./Details.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details(props: Props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.body}>
        <Text>Details page</Text>
      </View>
    </View>
  );
}
