import { View, Text } from "react-native";
import { FabButton } from "../components/FabButton";
export function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FabButton />
      <Text>Home</Text>
    </View>
  );
}
