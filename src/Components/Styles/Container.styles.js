import styled from "styled-components";
export const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width || "1080px"};
  margin: 0 auto;
  padding: auto;
  position: relative;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;
export const WrapperDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width || "1150px"};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${props => props.margin || "0 auto"};
  border-top: ${(props) => props.borderTop};
`;
export const ButtonContainer = styled.div`
  height: auto;
  width: auto;
  margin-left: 69.42px;
`;

export const StyledButton = styled.button`
  position: relative;
  height: ${props=> props.height};
  width: ${props=> props.width};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  float: ${(props) => props.float};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || "10px 15px"};
  color: ${(props) => props.color || "white"};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize || "15px"};
  line-height: ${(props) => props.lineHeight || "22px"};
  font-family: ${(props) => props.fontFamily || "Poppins"};
  font-weight: ${(props) => props.fontWeight || "500"};
  border: ${(props) => props.border || "none"};
  cursor: pointer;
  border-bottom: ${(props) => props.borderBottom};
  background-color: ${(props) => props.backgroundColor || "white"};
`;

export const StyledInput = styled.input`
  display: inline;
  height: ${(props) => props.height || "53px"};
  width: ${(props) => props.width || "331px"};
  margin-top: 5px;
  margin: ${(props) => props.margin || "0 auto"};
  padding: 13px;
  color: "black";
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.borderRadius};
`;

export const StyledImage = styled.img`
  height: ${(props) => props.height ||"auto"};
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: relative;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

export const StyledNav = styled.nav`
  margin: ${(props) => props.margin};
  display: flex;
  width: ${(props) => props.width || "1080px"};
  justify-content: space-between;
  padding: ${(props) => props.padding || "10px"};

`;

export const StyledItem = styled.div`
  height: 190px;
  width: 220px;
  background-image: url(${props=> props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 5px;
`;