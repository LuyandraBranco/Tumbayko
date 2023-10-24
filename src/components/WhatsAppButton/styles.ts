import styled from "styled-components";

export const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background-color: ${(props) => props.theme["green-200"]};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 480px) {
    width: 3.4rem;
    height: 3.4rem;
    bottom: 0.9rem;
    right: 0.9rem;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    bottom: 1rem;
    right: 1rem;
  }
`;
