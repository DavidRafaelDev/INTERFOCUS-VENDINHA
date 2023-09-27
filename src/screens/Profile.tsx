import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FabButton } from "../components/FabButton";
import axios from "axios";
import { FlatList } from "react-native";


const Item = ({ item }) => (
  <View style={{ padding: 10 }}>
    <Text>{item.nome}</Text>
    <Text> CPF: {item.cpf}</Text>
    <Text>E-mail{item.email}</Text>
    <Text> Valor da divida: x</Text>
  </View>
);

export function Profile() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://modeloproxyapi.interfocus.com.br:4443/api/Cliente/GetOData?%24count=true';
    const headers = {
      Accept: 'application/json',
    };
    axios.get(apiUrl, { headers })
      .then(response => {
        console.log('responsee', response.data.d.results);
        setData(response.data.d.results);
      })
      .catch(error => {
      });
  }, []);
  return (
    <View style={{ flex: 1}}>
      <FabButton />
      
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
