import {
  ContainerSidebar,
  NavLinks,
  Item,
  StyledLink
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
          <StyledLink to="/" onClick={closeSidebar}>
            <House size={24} />
            Home
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/service" onClick={closeSidebar}>
            {" "}
            <Package size={24} />
            Serviços
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
            Contactos
          </StyledLink>
        </Item>
        <Item>
        <StyledLink to="/appointment" onClick={closeSidebar}>
          <AddressBook size={24} />
          Agendamento
        </StyledLink>
      </Item>
      </NavLinks>
    </ContainerSidebar>
  );
};
