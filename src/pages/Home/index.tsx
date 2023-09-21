import { Hero } from "../../components/Hero";
import { HomeContainer } from "./styles";
import { slideshowData } from "../../data/slideshowlData";
import { ServiceSlide } from "../../components/ServiceSide";

export function Home() {
  return (
    <HomeContainer>
      <Hero data={slideshowData} />
      <ServiceSlide />
    </HomeContainer>
  );
}
