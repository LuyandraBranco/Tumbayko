import {
  ServiceContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
  Linker,
  Button,
  Span
} from "./styles";
import Ilustration from "../../assets/Ilustration3.svg";
import { useTranslation } from "react-i18next";

export function Service() {
  const { t } = useTranslation();
  const alt = t("service-alt1");
  return (
    <ServiceContainer>
      <InformationContainer>
        <Title>{t("service-title")}</Title>
        <Description>{t("service-description")}</Description>
        <Linker href="../../../public/documents/ManualCliente.pdf">
          <Button>{t("service-button1")}</Button>
        </Linker>

        <Description>
        {t("service-desc")}
        <Linker href="../../../public/documents/Manual Do Cliente Da China Para Angola.pdf">
          <Span>{t("service-CHINA")}</Span>{" "}
        </Linker>
        {t("service-and")}
        <Linker href="../../../public/documents/Manual Do Cliente De EUA Para Angola.pdf">
          <Span>{t("service-EUA")}</Span>{" "}
        </Linker>
      </Description>
      </InformationContainer>

      <ImageContainer>
        <Image src={Ilustration} alt={alt} />
      </ImageContainer>
    </ServiceContainer>
  );
}
