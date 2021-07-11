import React from 'react';
import Item from '../Components/Item/Item';
import Nav from '../Components/Nav/Nav';
import { Container, WrapperDiv } from '../Components/Styles/Container.styles';

const Menupage = () => {
    return (
        <div>
            <Nav/>
            <Container>
                <Item/>
            </Container>
        </div>
    );
};

export default Menupage;