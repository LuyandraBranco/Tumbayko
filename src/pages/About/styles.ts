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

  @media (max-width: 891px) {
    height: auto;
    flex-direction: column-reverse;
    padding-bottom: 2rem;
  }
  
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["gray-900"]};

  @media  (max-width: 891px) {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 25rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 15rem;
    margin-top: 0.4rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 20rem;
    margin-top: 0.4rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    width: 100%;
    height: 25rem;
    margin-top: 0.4rem;
  }
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

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0 1rem 1.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.8rem;
    margin: 1rem 0 1rem 2.7rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  margin: 0 5rem;
  text-align: justify;

  @media (max-width: 480px) {
    margin: 0 1.5rem 0rem 1.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin: 0 2.5rem 0rem 2.7rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    margin: 0 2.5rem 0rem 2.7rem;
  }
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

  @media (max-width: 891px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1rem;
  }

`;

export const ItemSecondContainer = styled.div`
  width: 20%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.4px solid ${(props) => props.theme["orange-500"]};
  border-radius: 6px;

  @media (max-width: 891px) {
    width: 90%;
    margin-bottom: 1rem;
    height: auto;
    padding-bottom: 1rem;
  }
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
