import { useTranslation } from 'react-i18next';
import {
  AppointmentContainer,
  InformationContainer,
  Title,
  Description,
  ContactInformationContainer,
  TitleInformation,
  DescriptionInformation,
  Span,
} from "./styles";

export function Appointment() {
  const {t} = useTranslation();
  return  ( 
  <AppointmentContainer>
  <InformationContainer>
    <Title>{t('appointment-title')}</Title>
    <Description>
    {t('appointment-description')}
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
      </ContactInformationContainer>
    </Description>
  </InformationContainer>
</AppointmentContainer>);
}
