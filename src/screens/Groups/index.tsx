import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header showBackButton/>
      <HighLight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do ignite"/>
    </Container>
  );
}


