import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Debt";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DebtAddition } from "../screens/DebtAddition";

const { Navigator: BottomTabNavigator, Screen } = createBottomTabNavigator();
const OtherStack = createNativeStackNavigator();

function DebtAdditionStackScreen() {
  return (
    <OtherStack.Navigator>
      <OtherStack.Screen
        name="DebtAddition"
        component={DebtAddition}
      />
    </OtherStack.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabNavigator>
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
          component={Profile}
          options={{
            tabBarIcon: ({ size }) => (
              <Feather size={size} color="#62A856" name="user" />
            ),
            headerShown: false,
            title: "",
          }}
        />
      </BottomTabNavigator>
      <Screen
        name="DebtAddition"
        component={DebtAdditionStackScreen} 
      />
    </NavigationContainer>
  );
}
