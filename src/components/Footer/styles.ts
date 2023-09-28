import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 23rem;
  border-top: 2px solid ${(props) => props.theme["gray-100"]};
  padding-top: 0.4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    height: 65rem;
  }
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    height: 60rem;
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
  background: ${(props) => props.theme["orange-500"]};
`;

export const InformationContainer = styled.div`
  width: 30%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    height: 60rem;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  width: 40%;
  height: 3rem;
  margin: 1rem 0rem;
  margin-left: 5%;

  @media (max-width: 480px) {
    width: 90%;
    height: 8rem;
    margin-bottom: 1rem;
    margin-left: -1.5rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 7rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    width: 90%;
    height: 8rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  font-weight: 420;

  @media (max-width: 480px) {
   margin-left: 0.5rem;
  }
`;

export const MediaContainer = styled.div`
  width: 80%;
  height: 5rem;
  display: flex;
  margin-left: 7%;

  @media (max-width: 480px) {
    width: 90%;
    height: 2rem;
    margin: 0;
    margin-left: 2%;
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
  border-radius: 3px;
  cursor: pointer;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme["gray-100"]};
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: ${(props) => props.theme["orange-500"]};
  }
  &:hover {
    background: ${(props) => props.theme["orange-500"]};
    color: ${(props) => props.theme.white};
    border: none;

    > svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const NavContainer = styled.nav`
  width: 15%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 90%;
    height: 15rem;
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme["orange-500"]};
  font-size: 1.4rem;
  margin: 1rem 0 1rem 2rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
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
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme["gray-900"]};

  &:hover {
    color: ${(props) => props.theme["orange-500"]};
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

  @media (max-width: 480px) {
    width: 90%;
    height: 15rem;
  }
`;

export const DescriptionContact = styled.p`
  margin-left: 2rem;
  color: ${(props) => props.theme["gray-900"]};
  margin-bottom: 1rem;
  font-weight: 420;
`;

export const SubscribeContainer = styled.div`
  width: 30%;
  height: 18rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 90%;
    height: 15rem;
  }
`;

export const Input = styled.input`
  width: 70%;
  padding: 0.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  border: 0.5px solid ${(props) => props.theme["orange-500"]};

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonSubscribe = styled.button`
  width: 3.5rem;
  padding: 0.5rem;
  height: 2.5rem;
  border: none;
  background: ${(props) => props.theme["orange-500"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: -2rem;

  > svg {
    color: ${(props) => props.theme.white};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-weight: 600;
`;
