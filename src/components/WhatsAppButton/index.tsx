import {WhatsAppButtonContainer} from './styles';
import { WhatsappLogo } from 'phosphor-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=+244937385547";
  };

  return (
    <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
      <WhatsappLogo size={30} />
    </WhatsAppButtonContainer>
  );
}
