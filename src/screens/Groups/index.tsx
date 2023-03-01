import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
export function Groups() {

  const [ groups, setGroups ] = useState(['Amigos', 'Trabalho', 'Esporte']);


  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} />}
        ListEmptyComponent={()=> <ListEmpty message="Não há turmas cadastradas"/>}
      />

    </Container>
  );
}


