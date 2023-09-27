import Slider from "react-slick";
import styled from "styled-components";

export const CollaboratorsContainer = styled.section`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme["gray-900"]};
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ItemCollaborators = styled(Slider)`
  width: 90%;
  height: 8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  /* background: ${(props) => props.theme["gray-100"]}; */
`;

export const CollaboratorsImageContainer = styled.div`
  width: 10rem;
  height: 8rem;
  padding-right: 5rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


