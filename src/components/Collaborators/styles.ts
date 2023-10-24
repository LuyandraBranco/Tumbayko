import Slider from "react-slick";
import styled from "styled-components";

export const CollaboratorsContainer = styled.section`
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
`;

export const Title = styled.h1`
  font-size: 2.1rem;
  color: ${(props) => props.theme["gray-900"]};
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ItemCollaborators = styled(Slider)`
  width: 92%;
  height: 8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const CollaboratorsImageContainer = styled.div`
  width: 10rem;
  height: 8rem;
  padding-right: 5rem;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  display: flex;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-left: 20%;
`;
