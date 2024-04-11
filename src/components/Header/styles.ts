import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme["gray-100"]};

  > svg {
    color: ${(props) => props.theme.black};
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    display: none;

    @media screen and (max-width: 910px) {
      display: inline;
    }
  }

  @media screen and (max-width: 780px) {
    height: 4.5rem;
  }
`;

export const LogoContainer = styled.div`
  width: 20%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    max-height: 4rem;
    background-color: transparent;
    object-fit: cover;
  }
`;

export const Navbar = styled.nav`
  width: 60%;
  height: 5rem;
  display: flex;
  justify-content: center;
  overflow-x: none;
  overflow-x: hidden;
`;

export const NavLinks = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;
  margin-top: 1rem;

  @media screen and (max-width: 910px) {
    display: none;
  }
`;

export const Item = styled.li`
  margin-right: 1.8rem;
  margin-top: 0.7rem;
  font-weight: 600;
  line-height: 1.6;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme["gray-700"]};

  &:hover {
    color: ${(props) => props.theme["orange-500"]};
    border-bottom: 3px solid ${(props) => props.theme["orange-500"]};
    padding-bottom: 0.7rem;
    transition: 0.5s;
  }

  &.active {
    color: ${(props) => props.theme["orange-500"]};
  }

  > svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`;

export const Styled = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const Styleds = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 680px) {
    margin-left: 6rem;
  }
`;

export const IconsContainer = styled(LogoContainer)`
  width: 20%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    border: 1px solid ${(props) => props.theme["orange-500"]};
    color: ${(props) => props.theme["gray-400"]};
    border-radius: 7px;
    margin-right: 1rem;
    cursor: pointer;
    padding: 0.2rem;
  }

  @media screen and (max-width: 910px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 8.5rem;
  height: 3rem;
  border: none;
  background: ${(props) => props.theme["orange-500"]};
  color: ${(props) => props.theme.white};
  font-size: 0.9rem;
  margin-right: 4rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.black};
    transition: 0.5s;
    border-radius: 5px;
  }
`;

export const IconButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-400"]};
  border: 1px solid ${(props) => props.theme["orange-500"]};
  border-radius: 6px;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
