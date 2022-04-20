import styled from "styled-components";
import { Star, Calendar, ExternalLink } from "react-feather";
import { DetailsContainer, Rating, Release } from "./ResultCard";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  padding: 8px 17px 8px 9px;
  background-color: var(--noir);
  box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 22px;

  img {
    width: 107px;
    height: 107px;
    object-fit: cover;
    border-radius: 25px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-size: 14px;
    margin: 0;
    line-height: 179%;
    margin-bottom: 7px;
    font-weight: 400;
  }
`;

const RemoveBtn = styled.button`
  width: 100%;
  padding: 2.5px 0;
  line-height: 179%;
  font-size: 14px;
  font-weight: 400;
  background-color: #f2626b;
  border: none;
  box-shadow: 0px 0px 3px #f2626b;
  border-radius: 10px;
  color: inherit;
  margin-top: 15px;
`;
const ListItem = ({ item, removeItem }) => {
  const removeFromList = async () => {
    await axios
      .delete("http://localhost:5000/list", { params: { id: item.id } })
      .then((res) => {
        console.log(res);
        removeItem();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Container>
      <img src={item.background_image} />
      <Info>
        <h2>{item.name}</h2>
        <DetailsContainer>
          <Rating>
            <Star />
            {item.metacritic || "No Rating Available"}
          </Rating>
          <Release>
            <Calendar />
            {item.released || "No Release Date Available"}
          </Release>
        </DetailsContainer>
        <RemoveBtn onClick={removeFromList}>Remove</RemoveBtn>
      </Info>
    </Container>
  );
};

export default ListItem;
