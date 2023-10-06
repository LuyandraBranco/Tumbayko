import {
  ServiceContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
  Linker,
  Button,
} from "./styles";
import Ilustration from "../../assets/Ilustration3.jpeg";

export function Service() {
  return (
    <ServiceContainer>
      <InformationContainer>
        <Title>Os nossos serviços</Title>
        <Description>
          Somos uma empresa firmada no comércio internacional, temos como
          objetivo facilitar o seu acesso ao mercado mundial sem precisar sair
          de Angola.
          Clique no botão abaixo e tenha acesso ao nosso Manual do Cliente.
        </Description>

        <Linker href="../../../public/documents/ManualCliente.pdf">
          <Button>
            Baixar Manual do Cliente
          </Button>
        </Linker>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt="Ilustração contacto" />
      </ImageContainer>
    </ServiceContainer>
  );
}
