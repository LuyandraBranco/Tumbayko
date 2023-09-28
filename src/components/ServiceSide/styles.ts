import styled from "styled-components";

export const ServiceSlideContainer = styled.div`
  width: 70%;
  height: 10rem;
  background: ${(props) => props.theme.white};
  margin-top: -5%;
  margin-bottom: 1%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme["gray-50"]};

  @media (max-width: 480px) {
    margin-top: 0;
    width: 100%;
    height: 40rem;
    border: none;
    flex-direction: column;
    border-bottom: 2px solid ${props=>props.theme["gray-100"]};
  }
`;

export const ItemService = styled.div`
  width: 21%;
  height: 9rem;
  margin: 0 0.5rem;
  background: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  > svg {
    color: ${(props) => props.theme["orange-500"]};
    text-align: left;
    margin-left: 0.8rem;
  }

  @media (max-width: 480px) {
   width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 1.1rem;
  text-align: left;
  color: ${(props) => props.theme["orange-500"]};
  margin: 0.5rem 0.8rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.theme["gray-400"]};
  margin: 0 0.8rem;
`;
