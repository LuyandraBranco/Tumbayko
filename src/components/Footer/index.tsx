import { useState } from "react";
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
  Link,
} from "./styles";
import LogoImage from "../../assets/logo2.png";
import {
  FacebookLogo,
  InstagramLogo,
  PaperPlaneRight,
  TiktokLogo,
} from "phosphor-react";
// import dotenv from 'dotenv'; // Importe dotenv usando import

// dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// import sgMail from '@sendgrid/mail'; // Importe sgMail usando import

// sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    // Verifica se o campo de e-mail está vazio
    if (!email) {
      alert("Por favor, insira um endereço de e-mail.");
      return;
    }

    try {
      // Chama a função de envio de e-mail para notificação
      await sendNotificationEmail(email);

      // Limpa o campo de e-mail após o envio
      setEmail("");
      alert("E-mail de notificação enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail de notificação:", error);
      alert(
        "Erro ao enviar o e-mail de notificação. Tente novamente mais tarde."
      );
    }
  };

  const sendNotificationEmail = async (userEmail: string) => {
    const msg = {
      to: "seu-email@example.com", // Seu endereço de e-mail de notificação
      from: "seu-email@example.com", // Deve ser um e-mail verificado no SendGrid
      subject: "Novo usuário inscrito",
      text: `Novo usuário se inscreveu com o e-mail: ${userEmail}`,
      html: `<p>Novo usuário se inscreveu com o e-mail: ${userEmail}</p>`,
    };

    // Envie o e-mail de notificação
    await sgMail.send(msg);
  };

  return (
    <FooterContainer>
      <FirstContainer>
        <InformationContainer>
          <LogoContainer>
            <Logo src={LogoImage} alt="logo" />
          </LogoContainer>
          <TextContainer>
            <Text>
              Somos uma empresa firmada no comércio internacional, temos como
              objetivo facilitar o seu acesso ao mercado mundial sem precisar
              sair de Angola.
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
          <DescriptionContact>+244937385547</DescriptionContact>
          <DescriptionContact>tumbayko.com</DescriptionContact>
          <DescriptionContact>tumbayko@gmail.com</DescriptionContact>
          <DescriptionContact>
            Angola, Luanda, Avenida 21 de Janeiro
          </DescriptionContact>
        </ContactContainer>
        <SubscribeContainer>
          <Title>Obtenha as últimas informações</Title>
          <InputContainer>
            <Input
              type="email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonSubscribe onClick={handleSubscribe}>
              Subscreva
            </ButtonSubscribe>
          </InputContainer>
        </SubscribeContainer>
      </FirstContainer>
      <SecondContainer>
        <Span>
          Copyright &copy; 2023{" "}
          <Link href="https://www.instagram.com/tumbayko_tem_tudo/">
            Tumbayko
          </Link>
          . Todos os direitos Reservados
        </Span>
        <Span>
          Desenvolvido por{" "}
          <Link href="luyfolio.vercel.app">Luyandra Branco</Link>
        </Span>
      </SecondContainer>
    </FooterContainer>
  );
}
