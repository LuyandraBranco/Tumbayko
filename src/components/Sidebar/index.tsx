import { useTranslation } from 'react-i18next';
import {
  ContainerSidebar,
  NavLinks,
  Item,
  StyledLink
} from "./styles";
import { FaTimes } from "react-icons/fa";
import {
  House,
  Phone,
  UsersThree,
  Package,
  AddressBook,
} from "phosphor-react";

export const Sidebar = ({ active }) => {
  const { t } = useTranslation();
  const closeSidebar = () => {
    active(false);
  };

  return (
    <ContainerSidebar sidebar={active}>
      <FaTimes onClick={closeSidebar} />

      <NavLinks>
        <Item>
          <StyledLink to="/" onClick={closeSidebar}>
            <House size={24} />
            {t('header-home')}
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/service" onClick={closeSidebar}>
            {" "}
            <Package size={24} />
            {t('header-service')}
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/about" onClick={closeSidebar}>
            <UsersThree size={24} />
            Quem somos
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/contact" onClick={closeSidebar}>
            <Phone size={24} />
            {t('header-about')}
          </StyledLink>
        </Item>
        <Item>
        <StyledLink to="/appointment" onClick={closeSidebar}>
          <AddressBook size={24} />
          {t('header-agendament')}
        </StyledLink>
      </Item>
      </NavLinks>
    </ContainerSidebar>
  );
};
