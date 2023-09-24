import {
  AboutContainer,
  FirstContainer,
  ImageContainer,
  Image,
  InformationContainer,
  Title,
  Description,
  Span,
  SecondContainer,
  ItemSecondContainer,
  ItemTitle,
  List,
  ItemList,
} from "./styles";
import Ilustration from "../../assets/Ilustration2.jpg";
export function About() {
  return (
    <AboutContainer>
      <FirstContainer>
        <InformationContainer>
          <Title>Quem somos?</Title>
          <Description>
            Fundada em 2019, com sede em Luanda, Angola, a{" "}
            <Span>Tumbayko Tem Tudo</Span> foi criada para facilitar a vida de
            milhões de pessoas em todo mundo, oferecendo o maior e mais
            sofisticado serviços de importação, redicionamento de encomendas,
            compra assistida e armazenamento garantindo aos seus clientes um
            serviço rápido, confiável, com preço justo e maior comodidade para
            suas compras não só na Ásia, mas em qualquer parte do mundo. A
            empresa conta com uma equipe totalmente engajada em melhor atender
            as necessidades de cada cliente e colaborador. Oferecemos a você a
            chance de expandir suas comprar e alavancar o seu negócio e adquirir
            produtos exclusivos com as melhores ofertas. A{" "}
            <Span>Tumbayko Tem Tudo</Span> torna o seu mundo menos
            burocrático!!!
          </Description>
        </InformationContainer>
        <ImageContainer>
          <Image src={Ilustration} alt="Ilustração contacto" />
        </ImageContainer>
      </FirstContainer>
      <SecondContainer>
        <ItemSecondContainer>
          <ItemTitle>Nossa Missão</ItemTitle>
          <List>
            <ItemList>
              Tornar as suas compras mais fácies em todo o mundo.
            </ItemList>

            <ItemList>Oferecer um atendimento rápido e personalizado.</ItemList>

            <ItemList>
              Soluções para dar resposta integrada as necessidades de cada
              cliente.
            </ItemList>

            <ItemList>Estratégia empresarial para importação.</ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle>Valores</ItemTitle>
          <List>
            <ItemList>
              Apoiar o seu negócio: Um negócio em crescimento depende de
              operações sem complicações. Os nossos serviços são simplificados e
              econômicos, desde compras personalizadas, até envio de matérias de
              grande porte.
            </ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle>Inovação</ItemTitle>
          <List>
            <ItemList>
              Explorar continuamente novas ideias, processos e soluções. Criar
              futuro.
            </ItemList>
          </List>
        </ItemSecondContainer>

        <ItemSecondContainer>
          <ItemTitle>Excelência</ItemTitle>
          <List>
            <ItemList>
              Garantir um serviço de excelência com qualidade e eficiência.
            </ItemList>
          </List>
        </ItemSecondContainer>
      </SecondContainer>
    </AboutContainer>
  );
}
