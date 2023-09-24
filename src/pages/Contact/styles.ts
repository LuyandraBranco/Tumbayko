import styled from "styled-components";

export const ContactContainer = styled.main`
  width: 100%;
  height: 35rem;
  display: flex;
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  color: ${props=>props.theme["gray-900"]};
  margin-top: 2rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 30rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const Title = styled.h1`
font-size: 4rem;
margin: 0rem 4rem 1rem 4.4rem;
color: ${props=>props.theme["orange-500"]}
`;

export const Description = styled.p`
margin: 0 5rem;
text-align: justify;
`;

export const ContactInformationContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`;

export const TitleInformation = styled.h3`
color: ${props=>props.theme["orange-500"]};
font-weight: 600;
margin: 1rem 0;
`;

export const DescriptionInformation = styled.p`
margin: 0.2rem 0;
color: ${props=>props.theme["gray-900"]};
`;

export const Span = styled.span`
color: ${props=>props.theme["orange-500"]};
`;
