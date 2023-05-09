import Header from "./components/Navigation/Header";
import MainSection from "./components/Main Section/MainSection";
import RewardsSection from "./components/Rewards Section/RewardsSection";
import BenefitsSection from "./components/Benefits Section/BenefitsSection";
import StepsSection from "./components/Steps Section/StepsSection";
import ContactSection from "./components/Contact Section/ContactSection";
import FooterSection from "./components/Footer Section/FooterSection";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainSection />
        <RewardsSection />
        <BenefitsSection />
        <StepsSection />
        <ContactSection />
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
