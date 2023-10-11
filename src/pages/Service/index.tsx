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
import { useTranslation } from "react-i18next";

export function Service() {
  const {t} = useTranslation();
  const alt = t('service-alt1');
  return (
    <ServiceContainer>
      <InformationContainer>
        <Title>{t('service-title')}</Title>
        <Description>
        {t('service-description')}
        </Description>

        <Linker href="../../../public/documents/ManualCliente.pdf">
          <Button>
          {t('service-button1')}
          </Button>
        </Linker>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt={alt} />
      </ImageContainer>
    </ServiceContainer>
  );
}
