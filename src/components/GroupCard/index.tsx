import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type GroupCardProps = TouchableOpacityProps & {
    title:string;
}


export function GroupCard({title}:GroupCardProps){
   return (
    <Container>
        <Icon />
        <Title>{title}</Title>
    </Container>
   );
}