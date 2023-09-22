// styles.ts
import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background-color: ${(props) => props.theme["orange-500"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideshowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 30rem;
`;

export const ImageContainer = styled.div`
  width: 45%;
  height: 30rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  width: 55%;
  height: 30rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  margin-top: 5rem;
`;

export const Information = styled.div`
  width: 100%;
  height: 13.7rem;
  display: flex;
  flex-direction: column;
`;

export const ButtonType = styled.button`
  width: 14rem;
  height: 3.2rem;
  background-color: ${(props) => props.theme["gray-900"]};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  margin-right: 2rem;
  border-radius: 1px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) =>
    props.theme.white}; /* Defina a cor laranja para as setas */
  position: absolute;
  top: 45%; /* Posicione as setas no centro vertical */
  transform: translateY(-50%);
  padding: 10px; /* Adicione um espaço ao redor das setas */
  z-index: 1; /* Para que as setas fiquem acima da imagem */
`;

export const LeftButton = styled(Button)`
  left: 10px; /* Posicione a seta esquerda à esquerda com espaço */
  bottom: 12rem;
`;

export const RightButton = styled(Button)`
  right: 10px; /* Posicione a seta direita à direita com espaço */
  bottom: 12rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.white};
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => props.theme.white};
`;
