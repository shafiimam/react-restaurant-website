import React, { useState } from "react";
import Nav from "../Components/Nav/Nav";
import { Container, StyledButton } from "../Components/Styles/Container.styles";
import data from "../../src/data";
import ItemCard from "../Components/Card/Item/ItemCard";
import MenuCard from "../Components/Card/MenuCard/MenuCard";
import { P } from "../Components/Styles/elements.style";
import Footer from "../Components/Footer/Footer";
const Menupage = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [loadMenu, setMenu] = useState("");
  const handleActiveMenu = (id) => {
    setActiveMenu(id);
    let res = data.find((data) => {
      if (data._id === id) {
        return data;
      }
    });
    setMenu(res);
  };

  return (
    <div>
      <Nav />
      <Container>
        <div className="grid-4 border-bottom">
          {data.map((item) => {
            return (
              <ItemCard
                data={item}
                fn={handleActiveMenu}
                activeMenu={activeMenu}
              />
            );
          })}
        </div>
        {loadMenu ? (
          <P
            fontFamily="Jost"
            padding="20px 0 0 0"
            fontWeight="500"
            fontSize="32px"
            lineHeight="46px"
          >
            This week's lunch {loadMenu.item.toLowerCase()} menu
          </P>
        ) : (
          ""
        )}
        <div className="grid-4">
          {loadMenu.menu ? (
            <>
              {loadMenu.menu.map((item) => {
                return <MenuCard item={item} />;
              })}
            </>
          ) : null}
        </div>
        {activeMenu && (
          <StyledButton
            width="120px"
            height="35px"
            className="grid-1"
            margin="0 auto"
            backgroundColor="orange"
          >
            Order Now
          </StyledButton>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Menupage;
