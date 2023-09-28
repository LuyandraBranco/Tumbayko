import styled from "styled-components";

export const ShippingContainer = styled.section`
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-100"]};

  @media (max-width: 480px) {
    height: 33rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: 35rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    height: 38rem;
  }
`;

export const TitleShipping = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme["gray-900"]};
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.4rem;
    margin-top: 2rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

export const InformationContainer = styled.div`
  width: 92%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: 25rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: 25rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    width: 83%;
    flex-direction: column;
    justify-content: center;
    height: 30rem;
  }
`;

export const InformationItem = styled.div`
  width: 32%;
  height: 10rem;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["orange-500"]};

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 1rem;
    height: 7rem;
  }

  @media (min-width: 480px) and (max-width: 891px) {
    width: 100%;
    margin-bottom: 1rem;
    height: 8rem;
  }

`;

export const NumberInformation = styled.div`
  width: 22%;
  height: 8rem;
  display: flex;
  justify-content: center;
  margin-left: 3%;
  margin-right: 5%;

  @media (max-width: 480px) {
    height: 6rem;
  }

  @media (min-width: 480px) and (max-width: 891px) {
    height: 7rem;
  }
`;

export const Number = styled.h1`
  color: ${(props) => props.theme["gray-900"]};
  font-size: 8.5rem;
  margin-top: -2.8rem;

  @media (max-width: 480px) {
    font-size: 6rem;
    margin-top: -2rem;
  }

  @media (min-width: 480px) and (max-width: 891px) {
    font-size: 7rem;
    margin-top: -2.2rem;
  }
`;

export const TextInformation = styled.div`
  width: 60%;
  height: 8rem;

  @media (max-width: 480px) {
    height: 6rem;
  }

  @media (min-width: 480px) and (max-width: 891px) {
    height: 7rem;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.09rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1rem;
  }

`;

export const Description = styled.p`
  color: ${(props) => props.theme.white};
  text-align: left;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (min-width: 480px) and (max-width: 910px) {
    font-size: 0.8rem;
  }
`;
