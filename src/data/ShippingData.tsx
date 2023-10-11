import { useTranslation } from "react-i18next";
function ShippingData() {
  const { t } = useTranslation();
  const title1 = t("shipping-title-1");
  const description1 = t("shipping-description-1");
  const title2 = t("shipping-title-2");
  const description2 = t("shipping-description-2");
  const title3 = t("shipping-title-3");
  const description3 = t("shipping-description-3");

  const shippingData = [
    {
      id: 1,
      title: title1,
      description: description1,
    },
    {
      id: 2,
      title: title2,
      description: description2,
    },
    {
      id: 3,
      title: title3,
      description: description3,
    }
  ];

  return shippingData;
}

export default ShippingData;

