import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  HeroContainer,
  ImageContainer,
  SlideshowContainer,
  Image,
  TextContainer,
  LeftButton,
  RightButton,
  Title,
  Description,
  ButtonsContainer,
  ButtonType,
  Information,
  Styled,
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SlideshowProps {
  data: { image: string; title: string; description: string }[];
}

export function Hero({ data }: SlideshowProps) {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    // Função para avançar automaticamente os slides a cada 2 segundos
    const autoSlide = () => {
      nextSlide();
    };

    const intervalId = setInterval(autoSlide, 8000);

    // Limpa o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, data]); // Adicione currentIndex e data como dependências

  return (
    <HeroContainer>
      <LeftButton onClick={prevSlide}>
        <FaArrowLeft />
      </LeftButton>
      <SlideshowContainer>
        <TextContainer>
          <Information>
            <Title>{data[currentIndex].title}</Title>
            <Description>{data[currentIndex].description}</Description>
          </Information>
          <ButtonsContainer>
            <Styled to="/contact">
              <ButtonType>{t('hero-button1')}</ButtonType>
            </Styled>
            <Styled to="/about">
              <ButtonType>{t('hero-button2')}</ButtonType>
            </Styled>
          </ButtonsContainer>
        </TextContainer>
        <ImageContainer>
          <Image
            src={data[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </ImageContainer>
      </SlideshowContainer>
      <RightButton onClick={nextSlide}>
        <FaArrowRight />
      </RightButton>
    </HeroContainer>
  );
}
