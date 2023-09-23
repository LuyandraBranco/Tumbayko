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
`;

export const TitleShipping = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme["gray-900"]};
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export const InformationContainer = styled.div`
  width: 85%;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const InformationItem = styled.div`
  width: 30%;
  height: 10rem;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme["orange-500"]};
`;

export const NumberInformation = styled.div`
  width: 22%;
  height: 8rem;
  display: flex;
  justify-content: center;
  margin-left: 3%;
  margin-right: 5%;
  `;
export const Number = styled.h1`
  color: ${(props) => props.theme["gray-900"]};
  font-size: 8.5rem;
  margin-top: -2.8rem;
`;

export const TextInformation = styled.div`
  width: 60%;
  height: 8rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.white};
  text-align: left;
  font-size: 0.9rem;
`;
