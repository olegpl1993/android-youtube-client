import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Router from "./src/app/Router";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
}
