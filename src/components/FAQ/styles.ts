import styled from "styled-components";

export const FAQContainer = styled.section`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme["gray-900"]};
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ItemsFAQContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemFAQColumn = styled.div`
  width: 47%;
  height: 20rem;
  color: ${(props) => props.theme["gray-900"]};
  overflow-y: auto;
  scrollbar-width: thin; /* Para navegadores Firefox */
  scrollbar-color: ${(props) => props.theme["orange-500"]} ${(props) => props.theme["gray-900"]}; /* Cor da thumb e da barra */

  /* Estilizar a thumb do scrollbar */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["orange-500"]};
    border-radius: 6px; /* Raio para torná-lo meio redondo */
  }

  /* Estilizar a barra do scrollbar */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra */
  }
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
