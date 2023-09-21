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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Envio de malas</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Envio de mercadoria</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>Venda de matérias</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
      </ItemService>
    </ServiceSlideContainer>
  );
}
