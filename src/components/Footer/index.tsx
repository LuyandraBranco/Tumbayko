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
  YoutubeLogo,
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              illo laudantium architecto ea?
              illo laudantium ?
            </Text>
          </TextContainer>
          <MediaContainer>
            <SocialMedia href="#">
              <ButtonMedia>
                <FacebookLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="#">
              <ButtonMedia>
                <InstagramLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="#">
              <ButtonMedia>
                <TiktokLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="#">
              <ButtonMedia>
                <YoutubeLogo size={24} />
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
        <Span>Copyright &copy; 2023 <Link href="#">Tumbayko</Link>. Todos os direitos Reservados</Span>
        <Span>Desenvolvido por <Link href="#">Luyandra Branco</Link></Span>
      </SecondContainer>
    </FooterContainer>
  );
}
