import React from "react";
import { Image } from "react-bootstrap";
import { P, Span } from "../Styles/elements.style";
import { WrapperDiv } from "../Styles/Container.styles";
const HeroCard = ({ icon, title, summary }) => {
  return (
    <WrapperDiv
      width="320px"
      height="270px"
      padding="30px"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        
      }}
    >
      <Image src={icon} />
      <P
        fontFamily="Jost"
        fontWeight="500"
        fontSize="20px"
        lineHeight="29px"
        color="white"
        textAlign="center"
      >
        {title}
      </P>
      <Span fontWeight="normal" fontSize="13px" fontFamily="Poppins" lineHeight="19.5px" color="white">{summary}</Span>
    </WrapperDiv>
  );
};

export default HeroCard;
