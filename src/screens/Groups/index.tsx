import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";

export function Groups() {
  return (
    <Container>
      <Header showBackButton/>
      <HighLight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}


