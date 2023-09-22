import styled from "styled-components";

export const ServiceSlideContainer = styled.div`
  width: 70%;
  height: 10rem;
  background: ${(props) => props.theme.white};
  margin-top: -5%;
  margin-bottom: 3%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme["orange-500"]};

`;

export const ItemService = styled.div`
  width: 23%;
  height: 9rem;
  margin: 0 1rem;
  background: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  >svg{
    color: ${(props) => props.theme["orange-500"]};
    text-align: left;
    margin-left: 0.8rem;
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
