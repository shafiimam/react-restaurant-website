import styled from "styled-components";

export const H2 = styled.h2`
  font-family: ${(props) => props.fontFamily || "Sans-serif"};
  font-size: ${(props) => props.fontSize || "30px"};
  color: ${(props) => props.fontSize || "black"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => props.color || "black"};
`;

export const P = styled.p`
  font-family: ${(props) => props.fontFamily || "Poppins"};
  font-size: ${(props) => props.fontSize || "15px"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight || "300"};
  line-height: ${(props) => props.lineHeight || "20px"};
  color: ${(props) => props.color || "black"};
  letter-spacing: ${(props) => props.letterSpacing || "0.02em"};
  text-align: ${(props) => props.textAlign};
`;

export const Span = styled.span`
  width: ${(props) => props.width};
  font-family: ${(props) => props.fontFamily || "Poppins"};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#282828"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: ${(props) => props.lineHeight || "22px"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign || "center"};
  background: ${(props) => props.background};
`;
export const A = styled.a`
  display: ${props => props.display || "block"};
  text-decoration: none;
  font-family: ${(props) => props.fontFamily || "Poppins"};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#000000"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: ${(props) => props.lineHeight || "22px"};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight || "300"};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  padding: ${(props) => props.padding};
`;
