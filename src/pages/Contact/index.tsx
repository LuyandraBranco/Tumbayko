import {
  ContactContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
  ContactInformationContainer,
  TitleInformation,
  DescriptionInformation,
  Span,
} from "./styles";
import Ilustration from "../../assets/Ilustration1.png";

export function Contact() {
  return (
    <ContactContainer>
      <InformationContainer>
        <Title>Contacte-nos</Title>
        <Description>
          Bem-vindo à Tumbayko Tem Tudo! Estamos muito felizes por você estar
          aqui. Nossa equipe está pronta para ajudá-lo a tornar suas compras
          mais fáceis e convenientes em todo o mundo.
          <ContactInformationContainer>
            <TitleInformation>Informações de Contato:</TitleInformation>
            <DescriptionInformation>
              <Span>Email:</Span> info@tumbaykotemtudo.com
            </DescriptionInformation>

            <DescriptionInformation>
              <Span>Telefone:</Span> +244937385547 | +244956299620
            </DescriptionInformation>

            <DescriptionInformation>
              <Span>Endereço:</Span> Avenida 21 de Janeiro, Rua do Skybar,
              Luanda, Angola
            </DescriptionInformation>

            <TitleInformation>Horário de Atendimento:</TitleInformation>
            <DescriptionInformation>
            Estamos disponíveis de Segunda a Sábado, das 8h às 17h.
            </DescriptionInformation>
          </ContactInformationContainer>
        </Description>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt="Ilustração contacto" />
      </ImageContainer>
    </ContactContainer>
  );
}
