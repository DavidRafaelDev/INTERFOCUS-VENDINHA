import { View, Text } from "react-native";
import { FabButton } from "../components/FabButton";

export function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FabButton />
      <Text>Profile</Text>
    </View>
  );
}
