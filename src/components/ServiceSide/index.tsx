import { Package } from "phosphor-react";
import { useTranslation } from 'react-i18next';
import {
  ServiceSlideContainer,
  ItemService,
  Title,
  Description,
} from "./styles";

export function ServiceSlide() {
  const { t } = useTranslation();
  return (
    <ServiceSlideContainer>
      <ItemService>
        <Package size={32} />
        <Title>{t('serviceSide-title-1')}</Title>
        <Description>
          {t('serviceSide-description-1')}
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>{t('serviceSide-title-2')}</Title>
        <Description> {t('serviceSide-description-2')}</Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>{t('serviceSide-title-3')}</Title>
        <Description>
        {t('serviceSide-description-3')}
        </Description>
      </ItemService>

      <ItemService>
        <Package size={32} />
        <Title>{t('serviceSide-title-4')}</Title>
        <Description>
        {t('serviceSide-description-4')}
        </Description>
      </ItemService>
    </ServiceSlideContainer>
  );
}
