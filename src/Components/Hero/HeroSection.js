import React from "react";
import { Container, WrapperDiv } from '../Styles/Container.styles';
import { Row ,Col } from "react-bootstrap";
import cart from "../../Images/cart.svg"
import track from "../../Images/track.svg"
import bag from "../../Images/shopping-bag.svg"
import HeroCard from "./HeroCard";
const heroData = [
  {
    icon: cart,
    title: "No minimum order",
    summary:
      "Order in for yourself or for the group, with no restrictions on order value",
  },
  {
    icon: track,
    title: "Live Order Tracking",
    summary:
      "Know where your order is at all times, from the restaurant to your doorstep",
  },
  {
    icon: bag,
    title: "Lightning-Fast Delivery",
    summary:
      "Experience Swiggy's superfast delivery for food delivered fresh & on time",
  },
];

const Hero = () => {
  return <WrapperDiv>
      <Row>
        {heroData.map(hero => (<Col lg={4} key={Math.random()}><HeroCard icon={hero.icon} title={hero.title} summary={hero.summary}/></Col>))}
      </Row>
  </WrapperDiv>;
};

export default Hero;
