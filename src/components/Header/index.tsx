import {
  HeaderContainer,
  Item,
  LogoContainer,
  NavLinks,
  Navbar,
  StyledLink,
  Styled,
  IconsContainer,
  Button,
  IconButton,
} from "./styles";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Sidebar } from "../Sidebar";
import {
  House,
  Translate,
  Moon,
  Phone,
  UsersThree,
  Package,
} from "phosphor-react";

export function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Styled to="/">
          <img src={Logo} alt="" />
        </Styled>
      </LogoContainer>
      <Navbar>
        <NavLinks>
          <Item>
            <StyledLink to="/">
              <House size={24} />
              Home
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/service">
              {" "}
              <Package size={24} />
              Serviços
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/about">
              <UsersThree size={24} />
              Quem somos
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/contact">
              <Phone size={24} />
              Contactos
            </StyledLink>
          </Item>
        </NavLinks>
      </Navbar>
      <IconsContainer>
        {/* <IconButton>
          <Translate size={18} />
        </IconButton>

        <IconButton>
          <Moon size={18} />
        </IconButton> */}

        <Styled to="/appointment">
          <Button>Agendamento</Button>
        </Styled>
      </IconsContainer>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </HeaderContainer>
  );
}
