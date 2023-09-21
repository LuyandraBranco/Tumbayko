import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const ContainerSidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: ${props=>props.theme["orange-500"]};
  height: 100%;
  top: 0px;
  right: 0px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  color: #fff;

  @media screen and (max-width: 680px) {
    width: 100%;
  }
  @media screen (max-width: 780px) {
    width: 50%;
  }

  > svg {
    position: fixed;
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.5rem;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
    }

    @media screen and (max-width: 680px) {
      width: 100%;
    }
    @media screen (max-width: 780px) {
      width: 50%;
    }
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  list-style: none;
  margin-top: 5rem;
  cursor: pointer;
`;

export const Item = styled.li`
  margin-top: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  &.active {
    color: ${(props) => props.theme.black};
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

export const ButtonContainer = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: none;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["orange-500"]};
    border: 1px solid ${(props) => props.theme["orange-500"]};
    color: ${(props) => props.theme.black};
  }
`;




