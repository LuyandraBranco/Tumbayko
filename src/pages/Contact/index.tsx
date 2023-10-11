import { useTranslation } from 'react-i18next';
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
  const {t} = useTranslation();
  const alt = t('contact-alt1');
  return (
    <ContactContainer>
      <InformationContainer>
        <Title>{t('contact-title')}</Title>
        <Description>
        {t('contact-description')}
          <ContactInformationContainer>
            <TitleInformation>{t('contact-title-information')}</TitleInformation>
            <DescriptionInformation>
              <Span>{t('contact-email-span')}</Span> info@tumbaykotemtudo.com
            </DescriptionInformation>

            <DescriptionInformation>
              <Span>{t('contact-phone-span')}</Span> +244937385547 | +244956299620
            </DescriptionInformation>

            <DescriptionInformation>
              <Span>{t('contact-address-span')}</Span> {t('contact-address-information')}
            </DescriptionInformation>

            <TitleInformation>{t('contact-opening-hours-title')}</TitleInformation>
            <DescriptionInformation>
            {t('contact-opening-hours-description')}
            </DescriptionInformation>
          </ContactInformationContainer>
        </Description>
      </InformationContainer>
      <ImageContainer>
        <Image src={Ilustration} alt={alt} />
      </ImageContainer>
    </ContactContainer>
  );
}
