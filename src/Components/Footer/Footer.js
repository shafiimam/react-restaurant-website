import React from "react";
import {
  WrapperDiv,
  StyledInput,
  StyledButton,
} from "../Styles/Container.styles";
import { P, Span, A } from "../Styles/elements.style";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../../Images/logo.png";
import facebook from "../../Images/facebook 1.png";
import twitter from "../../Images/twitter 1.png";
import linkedin from "../../Images/145807 1.png"
import insta from "../../Images/2111463 1.png"
const Footer = () => {
  return (
    <>
      <WrapperDiv height="265px" padding="40px">
        <Row>
          <Col className="d-flex flex-column justify-content-center " lg={3}>
            <P
              color="#260F3B"
              fontFamily="Jost"
              fontWeight="600"
              fontSize="16px"
              lineHeight="26px"
            >
              Company
            </P>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              About Us
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Team
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Help & Support
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Ride WIth us
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Partner With Us
            </A>
          </Col>
          <Col
            className="d-flex flex-column justify-content-start align-items-center"
            lg={6}
          >
            <Image src={logo} />
            <P
              margin="15px 0"
              fontFamily="Poppins"
              fontSize="14px"
              textAlign="center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
              is simply dummy text{" "}
            </P>
            <WrapperDiv height="46px">
              <StyledInput
                margin="0 0 0px 90px"
                color="#777777"
                height="45px"
                width="280px"
                borderRadius="5px"
                placeholder="Enter Email Address"
              />
              <StyledButton
                fontFamily="Jost"
                fontSize="16px"
                lineHeight="23px"
                height="46px"
                right="45px"
                top="-1px"
                borderRadius="5px"
                backgroundColor="#260F3B"
              >
                Subscribe
              </StyledButton>
            </WrapperDiv>
          </Col>
          <Col className="d-flex flex-column justify-content-center" lg={3}>
            <P
              color="#260F3B"
              fontFamily="Jost"
              fontWeight="600"
              fontSize="16px"
              lineHeight="26px"
            >
              Legal
            </P>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Terms & Conditions
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              TRefund & Cancellation
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Privacy Policy
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Cookie Policy
            </A>
            <A fontFamily="Poppins" lineHeight="35px" fontSize="14px">
              Offer Terms
            </A>
          </Col>
        </Row>
      </WrapperDiv>
      <WrapperDiv padding="40px" borderTop="1px solid black" className="d-flex justify-content-between">
          
            <Span width="440px">
              Copyright © 2021 Barnaslunsj Pvt. Ltd. All rights reserved.
            </Span>
            <Span>
                <A padding="0 6px" display="inline"><Image src={facebook}/></A>
                <A padding="0 6px" display="inline"><Image src={twitter}/></A>
                <A padding="0 6px" display="inline"><Image src={linkedin}/></A>
                <A padding="0 6px" display="inline"><Image src={insta}/></A>
               
            </Span>
        </WrapperDiv>
    </>
  );
};

export default Footer;
