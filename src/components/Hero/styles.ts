// styles.ts
import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background-color: ${(props) => props.theme["orange-500"]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width:480px){
    height: 20rem;
  }
`;

export const SlideshowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 30rem;

  @media (max-width:480px){
    width: 75%;
    height: 15rem;
  }
`;

export const ImageContainer = styled.div`
  width: 45%;
  height: 30rem;

  @media (max-width:480px){
    width: 35%;
    height: 10rem;
    margin-top: -6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const TextContainer = styled.div`
  width: 55%;
  height: 30rem;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width:480px){
    width: 65%;
    height: 17rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  margin-top: 2rem;

  @media (max-width:480px){
    flex-direction: column;
    height: 5rem;
    margin-top: 0.5rem;
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;

  @media (max-width:480px){
    height:12rem;
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
  border-radius: 1px;

  @media (max-width:480px){
    width: 7.4rem;
   margin-bottom: 0.5rem;
   font-size: 0.6rem;
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
`;

export const LeftButton = styled(Button)`
 
`;

export const RightButton = styled(Button)`

`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.white};

  @media (max-width:480px){
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
   font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => props.theme.white};

  @media (max-width:480px){
   font-size: 0.5rem;
  }
`;
