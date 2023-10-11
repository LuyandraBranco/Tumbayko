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
  Styleds
} from "./styles";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Sidebar } from "../Sidebar";
import { useTranslation } from 'react-i18next';
import {
  House,
  Phone,
  UsersThree,
  Package,
} from "phosphor-react";

export function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Styleds to="/">
          <img src={Logo} alt="" />
        </Styleds>
      </LogoContainer>
      <Navbar>
        <NavLinks>
          <Item>
            <StyledLink to="/">
              <House size={24} />
             {t('header-home')}
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/service">
              {" "}
              <Package size={24} />
              {t('header-service')}
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/about">
              <UsersThree size={24} />
              {t('header-about')}
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/contact">
              <Phone size={24} />
              {t('header-contact')}
            </StyledLink>
          </Item>
        </NavLinks>
      </Navbar>
      <IconsContainer>
        <Styled to="/appointment">
          <Button>{t('header-agendament')}</Button>
        </Styled>
      </IconsContainer>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </HeaderContainer>
  );
}
