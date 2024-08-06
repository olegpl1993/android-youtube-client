import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../app/Router.types";
import Header from "../../widgets/Header/Header";
import { styles } from "./Main.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main(props: Props) {
  const { navigation } = props;
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.body}>
        <Text>Main page</Text>

        <View style={styles.row}>
          <Text style={styles.button} onPress={() => setCount(count + 1)}>
            Plus
          </Text>
          <Text style={styles.button} onPress={() => setCount(count - 1)}>
            Minus
          </Text>
        </View>
        <Text style={styles.count}>Count: {count}</Text>
      </View>
    </View>
  );
}
