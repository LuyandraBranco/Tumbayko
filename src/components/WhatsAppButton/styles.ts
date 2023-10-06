import styled from "styled-components";

export const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 1.25rem; /* Ajuste a posição vertical conforme necessário */
  right: 1.25rem; /* Ajuste a posição horizontal conforme necessário */
  background-color: #25d366; /* Cor de fundo do botão */
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 480px) {
    width: 3.5rem;
    height: 3.5re;
    bottom: 0.9rem;
    right: 0.9rem;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    bottom: 1rem;
    right: 1rem;
  }
`;
