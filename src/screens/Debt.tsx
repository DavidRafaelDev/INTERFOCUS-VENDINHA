import { useEffect, useState } from "react";
import { View } from "react-native";
import { FabButton } from "../components/FabButton";
import { FlatList } from "react-native";
import api from "../utils/api";
import { Card } from "../components/Card";

export function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('Cliente/GetOData?%24count=true').then(response => {
      setData(response.data.d.results);
    })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);
  return (
    <View style={{ flex: 1, paddingTop: 25 }}>
      <FabButton />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
}
