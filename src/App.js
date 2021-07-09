import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection"
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card"
import {Container } from './Components/Styles/Container.styles'
function App() {
  return (
    <Container>
      <Header/>
      {/* <HeroSection/>
      <Footer/> */}
      <Card/>
    </Container>
  );
}

export default App;
