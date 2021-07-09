import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, WrapperDiv } from '../Styles/Container.styles';

const CategoryCard = ({title,menu}) => {
    const [showmenu,setShowMenu] = useState([])
    const showMenu = () => {
        setShowMenu(menu)
    }
    return (
        <Container >
            <WrapperDiv  onClick={showMenu} height="100px" width="100px" backgroundColor="yellow"><h2>{title}</h2></WrapperDiv>
            
        </Container>

    );
};

export default CategoryCard;