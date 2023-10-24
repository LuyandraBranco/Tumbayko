import styled from "styled-components";

export const ServiceContainer = styled.main`
  width: 100%;
  height: 27rem;
  display: flex;

  @media (max-width: 891px) {
    height: auto;
    flex-direction: column-reverse;
    padding-bottom: 2rem;
  }
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["gray-900"]};
  margin-top: 2rem;

  @media (max-width: 891px) {
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 25rem;
  margin-top: 2rem;
  background: ${(props) => props.theme["gray-50"]};

  @media (max-width: 480px) {
    width: 100%;
    height: 20rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 25rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0rem 4rem 1rem 4.4rem;
  color: ${(props) => props.theme["orange-500"]};

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0 1rem 1.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.8rem;
    margin: 0 0 1rem 2rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 3rem;
    margin: 0 2.5rem 0rem 2.7rem;
  }

  @media (min-width: 892px) and (max-width: 1300px) {
    font-size: 2.8rem;
  }
`;

export const Description = styled.p`
  margin: 0 5rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    margin: 0 1.5rem 0rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin: 0 2rem 1rem 2rem;
    font-size: 0.875rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    margin: 0 2.5rem 0rem 2.7rem;
  }

  @media (min-width: 892px) and (max-width: 1100px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1101px) and (max-width: 1200px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1201px) and (max-width: 1300px) {
    font-size: 1rem;
  }
`;

export const Linker = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const Button = styled.button`

  width: 16rem;
  height: 3rem;
  border: none;
  background: ${(props) => props.theme["orange-500"]};
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  margin: 0rem 4rem 1rem 5rem;
  cursor: pointer;

  @media (max-width: 480px) {
    margin: 0 1.5rem 0rem 2rem;
    margin-top: 1rem;
    font-size: 0.875rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin: 0 2rem 1rem 2rem;
    font-size: 0.875rem;
    margin-top: 1rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    margin: 0 2.5rem 0rem 2.7rem;
    margin-top: 1rem;
  }
`;

export const  Span= styled.span`
  color: ${(props) => props.theme["orange-500"]};
`;