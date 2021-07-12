import React from "react";
import {
  Container,
  StyledButton,
  StyledImage,
  StyledNav,
  WrapperDiv,
} from "../Styles/Container.styles";
import logo from "../../Images/logo.png";
import { Span } from "../Styles/elements.style";
import "./nav.css";
import tag from "../../Images/tags-line 1.png";
import question from "../../Images/question-inquiry 1.png";
import cart from "../../Images/shopping-cart 1.png";
const Nav = () => {
  return (
    <div className="mainMenu">
      <StyledNav>
        <StyledImage
          height="35px"
          width="175px"
          src={logo}
          padding="10px 0 0 0"
        />
        <div className="nav-items">
          <StyledButton fontWeight="500" fontSize="16px" color="#606060">
            <StyledImage padding="5px" src={tag} />
            Offer
          </StyledButton>
          <StyledButton
            fontWeight="500"
            fontSize="16px"
            color="#606060"
           
          >
            <StyledImage padding="6px" src={question} />
            Help
          </StyledButton>
          <StyledButton
            fontWeight="500"
            fontSize="16px"
            color="#606060"
            padding="10px 30px"
          >
            <StyledImage padding="6px" src={cart} />
            Cart
          </StyledButton>
          <StyledButton padding="7px 21px" backgroundColor="#FBA922" borderRadius="2px">
            Sign Up
          </StyledButton>
        </div>
      </StyledNav>
    </div>
  );
};

export default Nav;
