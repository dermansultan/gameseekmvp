import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import ListItem from "./ListItem";

function List() {
  const [list, setList] = useState([]);
  useEffect(async () => {
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
  });
  return (
    <div className="App" style={{ width: "90%", margin: "0 auto" }}>
      <Nav />
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default List;
