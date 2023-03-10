import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup(){
    return(
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HighLight 
                    title="Nova Turma" 
                    subtitle="crie a turma para adicionar as pessoas"
                />
                <Input 
                    placeholder="Nome da turma"
                />
                <Button title="Criar" />
            </Content>
        </Container>
    )
}