import {
  CollaboratorsContainer,
  ItemCollaborators,
  Title,
  CollaboratorsImageContainer,
  Image,
} from "./styles";
import { CollaboratorsData } from "../../data/CollaboratorsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Collaborators() {
  const settings = {
    infinite: true,
    slidesToShow: 5, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // Para tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Para telefones
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <CollaboratorsContainer>
      <Title>Nossos Colaboradores</Title>
      <ItemCollaborators>
        <Slider {...settings}>
          {CollaboratorsData.map((itemCollaboratorsData) => (
            <CollaboratorsImageContainer key={itemCollaboratorsData.alt}>
              <Image
               src={`${itemCollaboratorsData.image}?${new Date().getTime()}`}
                alt={itemCollaboratorsData.alt}
              />
            </CollaboratorsImageContainer>
          ))}
        </Slider>
      </ItemCollaborators>
    </CollaboratorsContainer>
  );
}
