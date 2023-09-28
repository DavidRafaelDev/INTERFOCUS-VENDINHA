import { View } from "react-native";
import { Text } from "react-native-paper";

export function Card(props) {
    console.log('props');
    return (
        <View style={{ padding: 10 }}>
            <Text>{props.item?.nome}</Text>
            <Text> CPF: {props.item?.cpf}</Text>
            <Text>E-mail{props.item?.email}</Text>
            <Text> Valor da divida: x</Text>
        </View>)
}