import styled from "styled-components";

export const FAQContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme["gray-900"]};
  margin: 2rem 0;
  text-transform: uppercase;
`;

export const ItemsFAQContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ItemFAQColumn = styled.div`
  width: 48%;
  color: ${(props) => props.theme["gray-900"]};
`;

export const Details = styled.details`
  margin: 0 5% 0 10%; /* Margem: superior direita inferior esquerda */
  cursor: pointer;
`;

export const Summary = styled.summary`
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
  padding: 2%;
  font-weight: 600;
  display: flex;
  justify-content: space-between; /* Alinha o conteúdo à direita */
  align-items: center; /* Alinha verticalmente o conteúdo */
  
`;

export const Answer = styled.p`
  padding: 2%;
  color: ${(props) => props.theme.black};
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
`;

export const ToggleSymbol = styled.span`
  font-weight: bold;
`;

