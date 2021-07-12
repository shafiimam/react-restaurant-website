import React from 'react';
import { Container, StyledButton, StyledImage, StyledNav, WrapperDiv } from '../Styles/Container.styles';
import logo from '../../Images/logo.png'
import { Span } from '../Styles/elements.style';
import tag from '../../Images/tags-line 1.png';
import question from '../../Images/question-inquiry 1.png';
import cart from '../../Images/shopping-cart 1.png';
const Nav = () => {
    return (
        <div className="mainMenu">
            <Container>
            <StyledNav>
                <StyledImage height="24px" width="175px" margin="18px 0 0 0" src={logo} w/>
                <WrapperDiv margin="0px 0px 0px 20%">
                    <StyledButton fontWeight="500" fontSize="16px" width="110px" padding="20px" color="#606060"><StyledImage padding="5px" src={tag}/>Offer</StyledButton>
                    <StyledButton fontWeight="500" fontSize="16px" width="110px" color="#606060" padding="20px"><StyledImage padding="6px" src={question}/>Help</StyledButton>
                    <StyledButton fontWeight="500" fontSize="16px" width="110px" color="#606060" padding="20px"><StyledImage padding="6px" src={cart}/>Cart</StyledButton>
                    <StyledButton backgroundColor="#FBA922" borderRadius="2px">Sign Up</StyledButton>
                </WrapperDiv>
            </StyledNav>
            </Container>
        </div>
        
    );
};

export default Nav;