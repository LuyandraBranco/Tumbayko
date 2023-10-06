// styles.ts
import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background-color: ${(props) => props.theme["orange-500"]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 35rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: 40rem;
  }
`;

export const SlideshowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92%;
  height: 30rem;

  @media (max-width: 480px) {
    width: 75%;
    height: 35rem;
    flex-direction: column-reverse;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 75%;
    height: 40rem;
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 45%;
  height: 30rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 13rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 20rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 680px) {
    object-fit: contain;
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  height: 30rem;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    height: 20rem;
    justify-content: center;
    background: ${(props) => props.theme["gray-900"]};
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 17rem;
    justify-content: center;
    background: ${(props) => props.theme["gray-900"]};
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    height: auto;
    padding-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 5rem;
    margin-top: 0.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    flex-direction: column;
    height: 6rem;
    margin-top: 0.5rem;
  }
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
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 9rem;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    background-color: ${(props) => props.theme["orange-500"]};
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 13rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    background-color: ${(props) => props.theme["orange-500"]};
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    font-size: 0.8rem;
    margin-right: 1rem;
    height: 2.8rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) =>
    props.theme.white}; /* Defina a cor laranja para as setas */
  padding: 10px; /* Adicione um espaço ao redor das setas */

  &:hover {
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const LeftButton = styled(Button)``;

export const RightButton = styled(Button)``;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.white};

  @media (max-width: 480px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => props.theme.white};

  @media (max-width: 680px) {
    font-size: 0.8rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    font-size: 1rem;
  }
`;
