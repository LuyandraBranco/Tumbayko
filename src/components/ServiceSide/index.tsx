import { Package } from "phosphor-react";
import {
  ServiceSlideContainer,
  ItemService,
  Title,
  Description,
} from "./styles";

export function ServiceSlide() {
  return (
    <ServiceSlideContainer>
      <ItemService>
        <Package size={32} />
        <Title>Importação</Title>
        <Description>
          Na Tumbayko Tem Tudo, simplificamos a importação para você.
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Envio de malas</Title>
        <Description>Na Tumbayko Tem Tudo, suas malas, nosso compromisso de entrega.</Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Envio de mercadoria</Title>
        <Description>
          Facilitamos o transporte de suas mercadorias com eficiência.
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Venda de matérias</Title>
        <Description>
          Na Tumbayko Tem Tudo, oferecemos qualidade nas vendas.
        </Description>
      </ItemService>
    </ServiceSlideContainer>
  );
}
