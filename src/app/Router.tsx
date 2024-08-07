import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../pages/Details/Details";
import Main from "../pages/Main/Main";
import { RootStackParamList } from "./Router.types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
