import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function FabButton() {
  return (
    <View style={styles.contaner}>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <AntDesign name="plus" size={24} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    alignContent: "center",
    position: "absolute",
    bottom: 70,
    right: 60,
  },
  button: {
    position: "absolute",
    color: "red",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62A856",
  },
});
