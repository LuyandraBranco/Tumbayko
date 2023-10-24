import { useTranslation } from 'react-i18next';
import {
  AboutContainer,
  FirstContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
  SecondContainer,
  ItemSecondContainer,
  ItemTitle,
  List,
  ItemList,
} from "./styles";
import Ilustration from "../../assets/Ilustration2.svg";
export function About() {

  const {t} = useTranslation();
  const alt = t('about-alt1');
  return (
    <AboutContainer>
      <FirstContainer>
        <InformationContainer>
          <Title>{t('about-title')}</Title>
          <Description>
          {t('about-description')}
          </Description>
        </InformationContainer>
        <ImageContainer>
          <Image src={Ilustration} alt={alt} />
        </ImageContainer>
      </FirstContainer>
      <SecondContainer>
        <ItemSecondContainer>
          <ItemTitle>{t('about-item-second-title-1')}</ItemTitle>
          <List>
            <ItemList>
              {t('about-item-second-title-1')}
            </ItemList>

            <ItemList> {t('about-item-second-list1')}</ItemList>

            <ItemList>
            {t('about-item-second-list2')}
            </ItemList>

            <ItemList> {t('about-item-second-list3')}</ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle> {t('about-item-second-title-2')}</ItemTitle>
          <List>
            <ItemList>
            {t('about-item-second-list4')}
            </ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle> {t('about-item-second-title-3')}</ItemTitle>
          <List>
            <ItemList>
            {t('about-item-second-list5')}
            </ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle> {t('about-item-second-title-4')}</ItemTitle>
          <List>
            <ItemList>
            {t('about-item-second-list6')}
            </ItemList>
          </List>
        </ItemSecondContainer>
      </SecondContainer>
    </AboutContainer>
  );
}
