import {
  Description,
  InformationContainer,
  InformationItem,
  NumberInformation,
  Number,
  ShippingContainer,
  TextInformation,
  Title,
  TitleShipping,
} from "./styles";
import { ShippingData } from "../../data/ShippingData";

export function Shipping() {
  return (
    <ShippingContainer>
      <TitleShipping>
        Opções de Envio Disponíveis: Como Entregamos os Seus Pedidos
      </TitleShipping>
        <InformationContainer>
          {ShippingData.map((shippingOption) => (
            <InformationItem key={shippingOption.id}>
              <NumberInformation>
                <Number>{shippingOption.id}</Number>
              </NumberInformation>
              <TextInformation>
                <Title>{shippingOption.title}</Title>
                <Description>{shippingOption.description}</Description>
              </TextInformation>
            </InformationItem>
          ))}
        </InformationContainer>
    </ShippingContainer>
  );
}
