import React from "react";
import image from "../../Images/image-1 1.svg";
import headerImage from "../../Images/header-image.jpg";
import {
  Container,
  ButtonContainer,
  StyledButton,
} from "../Styles/Container.styles";
import { Image, Row, Col } from "react-bootstrap";
import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
      <Row noGutter>
        <Col
          md={7}
           style={{ marginTop: "67px",position:"relative", left: "65px"}}
        >
          <Row>
            <Col md={12} className="d-flex flex-lg-row">
              <Image
                src={image}
                alt="image"
                style={{ width: "240px", height: "33px" }}
              />
              <ButtonContainer>
                <styledButton>Log In</styledButton>
                <StyledButton backgroundColor="#260F3B">Sign Up</StyledButton>
              </ButtonContainer>
            </Col>
          </Row>
          <HeaderContent/>
        </Col>
        <Col md={5}>
          <Image src={headerImage} />
        </Col>
      </Row>
  );
};

export default Header;
