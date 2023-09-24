import styled from "styled-components";

export const AboutContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 29rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["gray-900"]};
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 25rem;
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
  color: ${(props) => props.theme["orange-500"]};
`;

export const Description = styled.p`
  margin: 0 5rem;
  text-align: justify;
`;

export const Span = styled.span`
  color: ${(props) => props.theme["orange-500"]};
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemSecondContainer = styled.div`
  width: 20%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.4px solid ${(props) => props.theme["orange-500"]};
  border-radius: 6px;
`;

export const ItemTitle = styled.h3`
  color: ${(props) => props.theme["orange-500"]};
  margin: 1rem 0;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["orange-500"]};
`;

export const ItemList = styled.li`
  color: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  text-align: left;
  margin-bottom: 0.2rem;
`;
