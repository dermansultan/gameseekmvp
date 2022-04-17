import styled from "styled-components";
import { Star, Calendar, ExternalLink } from "react-feather";
import { DetailsContainer, Rating, Release } from "./ResultCard";

const ListItem = ({ item }) => {
  return (
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
  );
};

export default ListItem;
