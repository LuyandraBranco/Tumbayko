import {
  AboutContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
} from "./styles";
import Ilustration from '../../assets/Ilustration2.jpg';
export function About() {
    return (
      <AboutContainer>
      <InformationContainer>
        <Title>Quem somos?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          expedita reiciendis rerum explicabo recusandae vitae. Fugit aspernatur
          dolor consequuntur eligendi quibusdam hic cupiditate harum officia
          minima consectetur exercitationem, quo deserunt?
        </Description>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt="Ilustração contacto"/>
      </ImageContainer>
    </AboutContainer>
    );
  }
  