import axios from "axios";
import { useState, ChangeEvent } from "react";
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
  Select,
  Option,
  Form,
} from "./styles";
import LogoImage from "../../assets/logo2.png";
import { FacebookLogo, InstagramLogo, TiktokLogo } from "phosphor-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const [email, setEmail] = useState("");
  const apiKey = "d8e27865786bdfaf458e7fcd29ace2f5-us13"; // API do MailChimp
  const listId = "1185872"; // ID da sua lista no MailChimp

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://us13.api.mailchimp.com/3.0/lists/${listId}/members`, // Substitua <dc> pelo seu Data Center
        {
          email_address: email,
          status: "subscribed",
        },
        {
          headers: {
            Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
          },
        }
      );

      alert("Inscrição bem-sucedida! " + JSON.stringify(response.data));
    } catch (error) {
      alert("Erro ao se inscrever: " + error);
    }
  };
  const { i18n, t } = useTranslation();
  const place = t("footer-subscribe-placeholder");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    // Salva a preferência de idioma no localStorage
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  return (
    <FooterContainer>
      <FirstContainer>
        <InformationContainer>
          <LogoContainer>
            <Logo src={LogoImage} alt="logo" />
          </LogoContainer>
          <TextContainer>
            <Text>{t("footer-text")}</Text>
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
          <Select value={selectedLanguage} onChange={handleLanguageChange}>
            <Option value="pt">{t("footer-option1")}</Option>
            <Option value="en">{t("footer-option2")}</Option>
            <Option value="fr">{t("footer-option3")}</Option>
          </Select>
        </InformationContainer>
        <NavContainer>
          <Title>{t("footer-nav-title")}</Title>
          <Navbar>
            <Item>
              <StyledLink to="/">{t("footer-nav-item-1")}</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/service">{t("footer-nav-item-2")}</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/about">{t("footer-nav-item-3")}</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/contact">{t("footer-nav-item-4")}</StyledLink>
            </Item>
          </Navbar>
        </NavContainer>
        <ContactContainer>
          <Title>{t("footer-contact-title")}</Title>
          <DescriptionContact>+244937385547</DescriptionContact>
          <DescriptionContact>tumbayko.com</DescriptionContact>
          <DescriptionContact>tumbayko@gmail.com</DescriptionContact>
          <DescriptionContact>{t("footer-contact-address")}</DescriptionContact>
        </ContactContainer>
        <SubscribeContainer>
          <Title>{t("footer-subscribe-title")}</Title>
          <InputContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder={place}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ButtonSubscribe type="submit">
                {t("footer-subscribe-button")}
              </ButtonSubscribe>
            </Form>
          </InputContainer>
        </SubscribeContainer>
      </FirstContainer>
      <SecondContainer>
        <Span>
          Copyright &copy; 2023{" "}
          <Link href="https://www.instagram.com/tumbayko_tem_tudo/">
            {t("footer-link-1")}
          </Link>
          {t("footer-span-1")}
        </Span>
        <Span>
          {t("footer-span-2")}{" "}
          <Link href="luyfolio.vercel.app"> {t("footer-link-2")}</Link>
        </Span>
      </SecondContainer>
    </FooterContainer>
  );
}
