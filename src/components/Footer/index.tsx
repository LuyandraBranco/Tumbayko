import {
  FooterContainer,
  FirstContainer,
  InformationContainer,
  LogoContainer,
  Logo,
  TextContainer,
  Text,
  MediaContainer,
  NavContainer,
  Title,
  Navbar,
  ContactContainer,
  SubscribeContainer,
  SecondContainer,
  SocialMedia,
  ButtonMedia,
  Item,
  StyledLink,
  DescriptionContact,
  Input,
  ButtonSubscribe,
  InputContainer,
  Span,
  Link
} from "./styles";
import LogoImage from "../../assets/logo.png";
import {
  FacebookLogo,
  InstagramLogo,
  PaperPlaneRight,
  TiktokLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
      <FirstContainer>
        <InformationContainer>
          <LogoContainer>
            <Logo src={LogoImage} alt="logo" />
          </LogoContainer>
          <TextContainer>
            <Text>
            Somos uma empresa firmada no comércio internacional,
             temos como objetivo facilitar o seu acesso ao mercado mundial sem precisar sair de Angola.
            </Text>
          </TextContainer>
          <MediaContainer>
            <SocialMedia href="https://www.facebook.com/profile.php?id=100089799934674">
              <ButtonMedia>
                <FacebookLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="https://www.instagram.com/tumbayko_tem_tudo/">
              <ButtonMedia>
                <InstagramLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="https://www.tiktok.com/@tumbaykotemtudo">
              <ButtonMedia>
                <TiktokLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
          </MediaContainer>
        </InformationContainer>
        <NavContainer>
          <Title>Menu</Title>
          <Navbar>
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/service"> Serviços</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/about">Quem somos</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/contact">Contactos</StyledLink>
            </Item>
          </Navbar>
        </NavContainer>
        <ContactContainer>
          <Title>Contactos</Title>
          <DescriptionContact>+244945783746</DescriptionContact>
          <DescriptionContact>tumbayko.com</DescriptionContact>
          <DescriptionContact>tumbayko@gmail.com</DescriptionContact>
          <DescriptionContact>
            Angola, Luanda, Avenida 21 de Janeiro
          </DescriptionContact>
        </ContactContainer>
        <SubscribeContainer>
          <Title>Obtenha as últimas informações</Title>
          <InputContainer>
            <Input type="email" placeholder="Digite o seu email"></Input>
            <ButtonSubscribe><PaperPlaneRight size={22} /></ButtonSubscribe>
          </InputContainer>
        </SubscribeContainer>
      </FirstContainer>
      <SecondContainer>
        <Span>Copyright &copy; 2023 <Link href="https://www.instagram.com/tumbayko_tem_tudo/">Tumbayko</Link>. Todos os direitos Reservados</Span>
        <Span>Desenvolvido por <Link href="luyfolio.vercel.app">Luyandra Branco</Link></Span>
      </SecondContainer>
    </FooterContainer>
  );
}
