import styled from "styled-components";

export const FAQContainer = styled.section`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 480px) {
    height: auto;
    padding-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    padding-bottom: 1rem;
  }

`;

export const Title = styled.h1`
  font-size: 2.1rem;
  color: ${(props) => props.theme["gray-900"]};
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.4rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 1.5rem;
  }
`;

export const ItemsFAQContainer = styled.div`
  width: 92%;
  height: 17rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    height: 20rem;
  }
`;

export const ItemFAQColumn = styled.div`
  width: 47%;
  height: 17rem;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-900"]};
  overflow-y: auto;
  
  @media (max-width: 680px) {
    width: 95%;
    height: auto;
    font-size: 0.875rem;
  }

  @media (min-width: 681px) and (max-width: 930px) {
    height: 20rem;
  }
`;

export const Details = styled.details`
  margin: 0; /* Margem: superior direita inferior esquerda */
  cursor: pointer;

  @media (min-width: 681px) and (max-width: 1050px) {
    font-size: 0.9rem;
  }
`;

export const Summary = styled.summary`
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
  padding: 2%;
  font-weight: 600;
  display: flex;
  justify-content: space-between; /* Alinha o conteúdo à direita */
  align-items: center; /* Alinha verticalmente o conteúdo */

  @media (min-width: 681px) and (max-width: 891px) {
   padding: 1.8%;
  }
`;

export const Answer = styled.p`
  padding: 2%;
  color: ${(props) => props.theme.black};
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};

`;

export const ToggleSymbol = styled.span`
  font-weight: bold;
`;
