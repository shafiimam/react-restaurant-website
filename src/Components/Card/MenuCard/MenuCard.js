import {
  StyledButton,
  StyledImage,
  WrapperDiv,
} from "../../Styles/Container.styles";
import { P, Span } from "../../Styles/elements.style";
import "./menuCard.css";
import star from "../../../Images/black-star 1.svg";
import { useState } from "react";
import Modal from "../../Modal/Modal";
function MenuCard({ item }) {
  const [showDialog, setShowDialog] = useState(false);
  const toggle = () => {
      setShowDialog(false)
  }
  return (
    <WrapperDiv className="item" height="340px" width="220px">
      <div>
        <StyledImage src={item.image} />
      </div>
      <div className="menu-content">
        <div>
          <P
            margin="16px 0 0 0"
            fontFamily="Jost"
            fontWeight="500"
            fontSize="18px"
            lineHeight="26px"
          >
            {item.name}
          </P>
          <P
            fontFamily="Jost"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#8c8c8c"
          >
            {item.type}
          </P>
          <P fontWeight="600" fontSize="16px" lineHeight="24px" margin="10px 0">
            {item.day}
          </P>
        </div>
        <div className="rating">
          <StyledImage src={star} padding="2px 0 0 0" />
          <Span
            color="white"
            fontWeight="500"
            fontSize="8px"
            lineHeight="12px"
            padding="3px 0px 0px 0px"
          >
            {item.rating}
          </Span>
        </div>
      </div>
      <StyledButton
        borderRadius="2px"
        margin="0 0 10px 14px"
        padding="2px"
        height="35px"
        width="192px"
        backgroundColor="#260F3B"
        color="white"
        onClick={()=> setShowDialog(true)}
      >
        Quick View
      </StyledButton>
      <Modal showDialog={showDialog} toggle={toggle} item={item}/>
    </WrapperDiv>
  );
}

export default MenuCard;
