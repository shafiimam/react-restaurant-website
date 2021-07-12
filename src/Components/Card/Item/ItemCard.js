import { StyledItem } from "../../Styles/Container.styles";
import { P } from "../../Styles/elements.style";

function ItemCard(props) {
  const { item, _id, image } = props.data;
  console.log(image);
  return (
    <StyledItem
      background={image}
      className={props.activeMenu === _id ? "activeMenu item" : "item"}
      id={_id}
      onClick={() => {
        props.fn(_id);
      }}
      
    >
      <P
        padding="10px"
        margin="15px 0px 0px 0px"
        color="white"
        fontWeight="700"
        fontSize="17px"
        lineHeight="25px"
      >
        {item}
      </P>
    </StyledItem>
  );
}

export default ItemCard;
