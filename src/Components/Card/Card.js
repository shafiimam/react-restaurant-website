import React from 'react';
import { Container, WrapperDiv } from '../Styles/Container.styles';
import {Row, Col} from "react-bootstrap";
import CategoryCard from './CategroyCard';
const Card = () => {
    const catagories=[{
        title:"BREAD",
        menu:[
        {
        titel:"BREAD 1",
        price:1
        },
        {
        titel:"BREAD 2",
        price:2
        }
        ]
        },{
        title:"Salad",
        menu:[
        {
        titel:"Salad 1",
        price:1
        },
        {
        titel:"Salad 2",
        price:2
        }
        ]
        },
        {
        title:"Varied",
        menu:[
        {
        titel:"Varied 1",
        price:1
        },
        {
        titel:"Varied 2",
        price:2
        }
        ]
        },
        {
        title:"Veg",
        menu:[
        {
        titel:"Veg 1",
        price:4
        },
        {
        titel:"Veg 2",
        price:4
        }
        ]
        }]
    return (
        <Container>
            <WrapperDiv>
                <Row>
                   {
                       catagories.map(catagory => <CategoryCard title={catagory.title} menu={catagory.menu}/>)
                   }
                </Row>
            </WrapperDiv>
        </Container>
    );
};

export default Card;