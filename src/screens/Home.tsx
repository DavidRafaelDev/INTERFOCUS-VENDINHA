import { useEffect } from "react";

import { View, Text } from "react-native";
import { FabButton } from "../components/FabButton";
import { Card } from "../components/Card";
import axios from "axios";
export function Home() {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FabButton />
      <Card />
      <Text>Home</Text>
    </View>
  );
}
