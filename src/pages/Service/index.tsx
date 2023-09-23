import {
  ServiceContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
} from "./styles";
import Ilustration from "../../assets/Ilustration3.jpeg";

export function Service() {
  return (
    <ServiceContainer>
      <InformationContainer>
        <Title>Os nossos serviços</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          expedita reiciendis rerum explicabo recusandae vitae. Fugit aspernatur
          dolor consequuntur eligendi quibusdam hic cupiditate harum officia
          minima consectetur exercitationem, quo deserunt?
        </Description>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt="Ilustração contacto" />
      </ImageContainer>
    </ServiceContainer>
  );
}
