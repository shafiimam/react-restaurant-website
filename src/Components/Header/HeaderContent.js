import React from "react";
import {
  StyledInput,
  StyledButton,
  StyledImage,
  Container,
} from "../Styles/Container.styles";
import { H2, P, Span } from "../Styles/elements.style";
import { Image } from "react-bootstrap";
import accurate from "../../Images/accurate 1.png";
const HeaderContent = () => {
  return (
    <>
      <Container top="54px">
        <H2
          backgroundColor="#260F3B"
          fontWeight="500"
          fontSize="25px"
          lineHeight="36.13px"
          fonFamily="Jost"
        >
          Unexpected Guests?
        </H2>
        <P> Order food from favorite restaurant near you.</P>
      </Container>
      <Container top="93px" right="14px">
        <StyledInput placeholder="Enter a Location" />
        <StyledButton
          width="131px"
          height="53px"
          backgroundColor="#FBA922"
          margin="0"
          right="5px"
          bottom="1px"
        >
          Find Code
        </StyledButton>
        <StyledButton
          width="131px"
          height="53px"
          backgroundColor="transparent"
          color="#625E5E"
          margin="0 auto"
          right="270px"
          fontWeight="400"
        >
          <StyledImage style={{position: "relative",bottom:"-3px"}} src={accurate} /> Locate Me
        </StyledButton>
      </Container>
      <Container top="115px">
        <P
          fontFamily="Jost"
          fontWeight="400"
          fontSize="13px"
          lineHeight="19px"
          color="#8B8B8B"
          letterSPacing="0.2em"
        >
          Popular Cities In Bangladesh
        </P>
        <Span fontWeight="500">Dhaka</Span>
        <Span margin="15px" fontWeight="500" color="#707070">Sylhet</Span>
        <Span margin="15px" fontWeight="500">Khulna</Span>
        <Span margin="15px" fontWeight="500" color="#707070">Chattogram</Span>
        <Span margin="15px" fontWeight="500">Bogura</Span>
        <Span margin="15px"fontWeight="500" color="#707070">Comilla</Span>
      </Container>
    </>
  );
};

export default HeaderContent;
