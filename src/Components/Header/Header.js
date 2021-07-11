/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import image from "../../Images/image-1 1.svg";
import headerImage from "../../Images/header-image.jpg";
import {
  Container,
  ButtonContainer,
  StyledButton,
  StyledImage,
} from "../Styles/Container.styles";
import Authentication from "../Authentication/Authentication"
import { Image, Row, Col } from "react-bootstrap";
import HeaderContent from "./HeaderContent";
const Header = () => {
  const [dialog, setShowDialog] = useState(false)
  const [isSignUp, setSignUp] = useState(false)
  const showSignInDialog = () => {
    setSignUp(false);
    setShowDialog(true);
    
  }
  const showSignUpDialog = () => {
    setSignUp(true);
    setShowDialog(true);
    
  }
  const toggle = () => {
    setShowDialog(false)
  }
  return (
    <Container>
      <Row noGutter>
      <Col
        md={7}
        style={{ marginTop: "67px", position: "relative", left: "65px" }}
      >
        <Row>
          <Col md={12} className="d-flex flex-lg-row">
            <StyledImage
              src={image}
              alt="image"
              style={{ width: "240px", height: "33px" }}
            />
            <ButtonContainer>
              <StyledButton color="black" onClick={showSignInDialog}>Log In</StyledButton>
              <StyledButton backgroundColor="#260F3B" onClick={showSignUpDialog}>Sign Up</StyledButton>
            </ButtonContainer>
          </Col>
        </Row>
        <HeaderContent />
      </Col>
      <Col md={5}>
        <Image src={headerImage} />
      </Col>
    </Row>
    <Authentication isSignUp={isSignUp}  dialog={dialog} toggle={toggle}/>
    </Container>
  );
};

export default Header;
