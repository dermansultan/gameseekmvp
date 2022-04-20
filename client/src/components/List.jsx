import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import ListItem from "./ListItem";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      await axios.get("http://localhost:5000/list").then((res) => {
        if (res.data.list) {
          const promises = [];
          for (const id of res.data.list) {
            const promise = new Promise((resolve, reject) => {
              axios
                .get(
                  `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`
                )
                .then((response) => resolve(response.data))
                .catch((err) => reject(err));
            });
            promises.push(promise);
            Promise.all(promises).then((games) => {
              setList(games);
            });
          }
        }
      });
    }
    getList();
  }, []);
  return (
    <div className="App" style={{ width: "90%", margin: "0 auto" }}>
      <Nav />
      <h1 style={{ fontSize: "24px", marginTop: "60px", marginBottom: "30px" }}>
        My Game List ({list.length})
      </h1>
      <ListContainer>
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              removeItem={() =>
                setList(list.filter((game) => game.id !== item.id))
              }
            />
          );
        })}
      </ListContainer>
    </div>
  );
}

export default List;
