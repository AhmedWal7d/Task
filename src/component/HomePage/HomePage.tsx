import CartSlider from "../CardSlider/CardSlider";
import Header from "../Header/Header";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import ServicesSection from "../ServicesSection/ServicesSection";
import TourSliderSection from "../TourSliderSection/TourSliderSection";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <CartSlider/>
      <ServicesSection/>
      <TourSliderSection/>
      <ScrollToTopButton/>
    </div>
  )
}
