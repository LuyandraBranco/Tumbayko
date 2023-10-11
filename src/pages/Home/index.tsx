import { Hero } from "../../components/Hero";
import { HomeContainer } from "./styles";
import  SlideshowData  from "../../data/SlideshowlData";
import { ServiceSlide } from "../../components/ServiceSide";
import { FAQ } from "../../components/FAQ";
import { Shipping } from "../../components/Shipping";
import { Collaborators } from "../../components/Collaborators";

export function Home() {
  const showData =SlideshowData();
  return (
    <HomeContainer>
      <Hero data={showData} />
      <ServiceSlide />
      <Shipping />
      <Collaborators />
      <FAQ />
    </HomeContainer>
  );
}
