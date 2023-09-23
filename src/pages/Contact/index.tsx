import {
  ContactContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
} from "./styles";
import Ilustration from '../../assets/Ilustration1.png';

export function Contact() {
  return (
    <ContactContainer>
      <InformationContainer>
        <Title>Contacte-nos</Title>
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
    </ContactContainer>
  );
}
