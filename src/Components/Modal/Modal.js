import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import { StyledImage } from '../Styles/Container.styles';
import { P } from '../Styles/elements.style';

const Modal = ({showDialog ,toggle, item}) => {
    return (
        <Dialog open={showDialog} onClose={toggle}>
            <DialogContent>
                <StyledImage src={item.image}/>
                <P>{item.name}</P>
                <P>{item.type}</P>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;