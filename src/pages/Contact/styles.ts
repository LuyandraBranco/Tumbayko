import styled from "styled-components";

export const ContactContainer = styled.main`
  width: 100%;
  height: 32rem;
  display: flex;

  @media (max-width: 891px) {
    height: auto;
    flex-direction: column-reverse;
    padding-bottom: 1rem;
  }
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 30rem;
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
  height: 30rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 20rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
  }

  @media (min-width: 681px) and (max-width: 891px) {
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
    margin: 1rem 0 1rem 2.7rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  margin: 0 5rem;
  text-align: justify;

  @media (max-width: 480px) {
    margin: 0 1.5rem 0rem 1.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin: 0 2.5rem 0rem 2.7rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    margin: 0 2.5rem 0rem 2.7rem;
  }
`;

export const ContactInformationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const TitleInformation = styled.h3`
  color: ${(props) => props.theme["orange-500"]};
  font-weight: 600;
  margin: 1rem 0;
`;

export const DescriptionInformation = styled.p`
  margin: 0.2rem 0;
  color: ${(props) => props.theme["gray-900"]};
`;

export const Span = styled.span`
  color: ${(props) => props.theme["orange-500"]};
`;
