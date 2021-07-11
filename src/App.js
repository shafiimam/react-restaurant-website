import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import Footer from "./Components/Footer/Footer";
import Authentication from "./Components/Authentication/Authentication"
import { Container, WrapperDiv } from "./Components/Styles/Container.styles";
function App() {
  return (
    <>
      <Header />
      <WrapperDiv backgroundColor="#260F3B" margin="10px 0" width="100vw">
        <HeroSection />
      </WrapperDiv>
      <Footer />
      <Authentication/>
    </>
  );
}

export default App;
