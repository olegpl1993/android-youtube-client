import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../pages/Details/Details";
import Main from "../pages/Main/Main";
import { RootStackParamList } from "./Router.types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <RootStack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
