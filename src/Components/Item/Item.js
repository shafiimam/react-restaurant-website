import React, { useState } from "react";
import ItemCard from "./ItemCard"
import data from "./data";
import './item.css'
import { StyledItem } from "../Styles/Container.styles";
import { P } from "../Styles/elements.style";
import { Container, Grid } from "@material-ui/core";
const Item = () => {
  const [active, setActive] = useState("");
  

  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={3} key={item.item}>
            <StyledItem
              background={item.image}
              className={active}
              onClick={() => setActive("active")}
            >
              <P padding="10px" margin="15px 0px 0px 0px" color="white" fontWeight="700" fontSize="17px" lineHeight="25px">{item.item}</P>
            </StyledItem>
          </Grid>
        ))}
      </Grid>
        <Grid>
            <ItemCard/>
        </Grid>
    </Container>
    
  );
};

export default Item;
