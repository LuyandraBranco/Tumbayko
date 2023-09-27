import {
  ContainerSidebar,
  NavLinks,
  Item,
  StyledLink,
  ButtonContainer,
  Styled,
  Button,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import {
  House,
  Translate,
  Moon,
  Phone,
  UsersThree,
  Package,
  AddressBook,
} from "phosphor-react";

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <ContainerSidebar sidebar={active}>
      <FaTimes onClick={closeSidebar} />

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
        <Item>
        <StyledLink to="/appointment">
          <AddressBook size={24} />
          Agendamento
        </StyledLink>
      </Item>
      </NavLinks>
    </ContainerSidebar>
  );
};
