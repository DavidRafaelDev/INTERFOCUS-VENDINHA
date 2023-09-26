import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ size }) => (
              <Feather size={size} color="#62A856" name="home" />
            ),
            headerShown: false,
            title: "",
          }}
        />
        <Screen
          name="profile"
          options={{
            tabBarIcon: ({ size }) => (
              <Feather size={size} color="#62A856" name="user" />
            ),
            headerShown: false,
            title: "",
          }}
          component={Profile}
        />
      </Navigator>
    </NavigationContainer>
  );
}
