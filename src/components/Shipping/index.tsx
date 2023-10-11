import { useTranslation } from "react-i18next";
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
import ShippingData from "../../data/ShippingData";

export function Shipping() {
  const { t } = useTranslation();
  const shippingData = ShippingData();
  return (
    <ShippingContainer>
      <TitleShipping>{t("shipping-title")}</TitleShipping>
      <InformationContainer>
        {shippingData.map((shippingOption) => (
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
