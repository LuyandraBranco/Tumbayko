import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 23rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    height: auto;
  }

  @media (min-width: 681px) and (max-width: 891px) {
  }
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    270deg,
    #ff7538,
    ${(props) => props.theme["orange-500"]}
  );

  @media (max-width: 680px) {
    height: auto;
    flex-direction: column;
  }
`;
export const SecondContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["gray-900"]};
`;

export const InformationContainer = styled.div`
  width: 30%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 90%;
    height: auto;
    justify-content: flex-start;
  }
`;

export const LogoContainer = styled.div`
  width: 40%;
  height: 3rem;
  margin: 0.3rem 0rem;
  margin-left: -0.8%;

  @media (max-width: 480px) {
    width: 30%;
    margin-left: 1%;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    width: 40%;
    margin-left: -2%;
    height: 5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 910px) and (max-width: 1400px) {
    margin-left: 2%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 7rem;

  @media (max-width: 680px) {
    width: 90%;
    height: auto;
    padding-bottom: 2rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.white};
  margin-left: 2rem;
  margin-right: 4rem;
  font-weight: 420;
  text-align: justify;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    margin-left: 7%;
    margin-right: 0;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    margin-left: 7%;
    margin-right: 0;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
    margin-left: 1rem;
  }
`;

export const MediaContainer = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  margin-left: 7%;
  margin-top: 0.1rem;

  @media (max-width: 480px) {
    margin-left: 5.5%;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    width: 80%;
    height: 2rem;
    margin: 0;
    margin-left: 7%;
  }

  @media (min-width: 890px) and (max-width: 990px) {
    margin-top: 1.9rem;
  }
`;

export const SocialMedia = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["orange-500"]};
`;

export const ButtonMedia = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.theme["gray-900"]};
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: ${(props) => props.theme["orange-500"]};
  }
  &:hover {
    background: ${(props) => props.theme["green-200"]};
    color: ${(props) => props.theme.white};

    > svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 680px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const NavContainer = styled.nav`
  width: 15%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 90%;
    height: auto;
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  margin: 1rem 0 1rem 2rem;

  @media (max-width: 480px) {
    margin-left: 6%;
  }
`;
export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 1rem;
  font-weight: 420;
  cursor: pointer;
  margin-left: 2rem;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    margin-left: 6%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
  }
`;

export const Styled = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const ContactContainer = styled.div`
  width: 20%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 90%;
    height: auto;
  }
`;

export const DescriptionContact = styled.p`
  margin-left: 2rem;
  color: ${(props) => props.theme.white};
  margin-bottom: 1rem;
  font-weight: 420;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    margin-left: 6%;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
  }
`;

export const SubscribeContainer = styled.div`
  width: 30%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 90%;
    height: auto;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  border: 1.5px solid ${(props) => props.theme["gray-900"]};
  font-size: 0.875rem;

  @media (max-width: 480px) {
    margin-left: 6%;
  }

  @media (max-width: 680px) {
    width: 90%;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
  }
`;

export const ButtonSubscribe = styled.button`
  width: 8rem;
  padding: 0.5rem;
  height: 3rem;
  border: none;
  background: ${(props) => props.theme["gray-900"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 2rem;
  color: ${(props) => props.theme.white};
  margin-top: 0.5rem;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    margin-left: 6%;
  }

  &:hover {
    background: ${(props) => props.theme["green-200"]};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  font-size: 0.875rem;

  @media (max-width: 680px) {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-weight: 600;
`;

export const Select = styled.select`
  width: 60%;
  padding: 0.2rem;
  height: 2rem;
  color: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  border: 1.5px solid ${(props) => props.theme["gray-900"]};
  font-size: 0.875rem;
  margin-top: 0.6rem;
  border: none;

  @media (max-width: 480px) {
    margin-left: 6%;
    margin-right: 0;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    margin-left: 7%;
    margin-right: 0;
  }

  @media (min-width: 681px) and (max-width: 891px) {
    font-size: 0.7rem;
    margin-left: 1rem;
  }
`;
export const Option = styled.option``;
