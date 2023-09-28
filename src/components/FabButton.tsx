import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function FabButton() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function openNewComponent() {
    navigation.navigate('DebtAddition');
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={openNewComponent}>
        <View style={styles.button}>
          <AntDesign name="plus" size={24} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    right: 60,
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62A856",
  },
});