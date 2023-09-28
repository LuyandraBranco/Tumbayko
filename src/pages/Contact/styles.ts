import styled from "styled-components";

export const ContactContainer = styled.main`
  width: 100%;
  height: 32rem;
  display: flex;

  @media (max-width: 480px) {
    height: 45rem;
    flex-direction: column-reverse;
  }

  @media (min-width: 480px) and (max-width: 680px) {
  }

  @media (min-width: 681px) and (max-width: 891px) {
  }
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["gray-900"]};
  margin-top: 2rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 30rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
  }

  @media (min-width: 681px) and (max-width: 891px) {
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
    font-size: 2rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 2.2rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
  }
`;

export const Description = styled.p`
  margin: 0 5rem;
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 2.2rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
  }
`;

export const ContactInformationContainer = styled.div`
  width: 100%;
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
