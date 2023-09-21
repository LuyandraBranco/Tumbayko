import { useEffect, useState } from "react";
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
  Information
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SlideshowProps {
  data: { image: string; title: string; description: string }[];
}

export function Hero({ data }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    // Inicia o intervalo para avançar automaticamente os slides a cada 2 segundos
    const id = setInterval(() => {
      nextSlide();
    }, 8000);

    setIntervalId(id);

    // Limpa o intervalo quando o componente for desmontado
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, intervalId]);

  return (
    <HeroContainer>
      <SlideshowContainer>
        <LeftButton onClick={prevSlide}>
          <FaArrowLeft />
        </LeftButton>
        <TextContainer>
          <Information>
            <Title>{data[currentIndex].title}</Title>
            <Description>{data[currentIndex].description}</Description>
          </Information>
          <ButtonsContainer>
            <ButtonType>Contacte-nos</ButtonType>
            <ButtonType>Obtenha Informações</ButtonType>
          </ButtonsContainer>
        </TextContainer>
        <RightButton onClick={nextSlide}>
          <FaArrowRight />
        </RightButton>
        <ImageContainer>
          <Image
            src={data[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </ImageContainer>
      </SlideshowContainer>
    </HeroContainer>
  );
}
