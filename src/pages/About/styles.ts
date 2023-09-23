import styled from "styled-components";

export const AboutContainer = styled.main`
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
  margin-top: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h1`
font-size: 4rem;
margin: 0rem 4rem 1rem 4.4rem;
color: ${props=>props.theme["orange-500"]}
`;

export const Description = styled.p`
margin: 0 5rem;
`;
