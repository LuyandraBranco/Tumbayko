import { Hero } from "../../components/Hero";
import { HomeContainer } from "./styles";
import { slideshowData } from "../../data/slideshowlData";
import { ServiceSlide } from "../../components/ServiceSide";
import { FAQ } from "../../components/FAQ";
import { Shipping } from "../../components/Shipping";

export function Home() {
  return (
    <HomeContainer>
      <Hero data={slideshowData} />
      <ServiceSlide />
      <Shipping/>
      <FAQ/>
    </HomeContainer>
  );
}
