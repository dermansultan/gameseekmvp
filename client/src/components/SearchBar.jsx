import styled from "styled-components";
import { Search } from "react-feather";
import axios from "axios";
import { useEffect, useState } from "react";

const Form = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  svg {
    position: absolute;
    color: var(--cloud);
    width: 17px;
    height: auto;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  div {
    margin: 0 auto;
    max-width: 964px;
    width: 100%;
    position: relative;
  }
`;

const Input = styled.input`
  padding: 0px 0px 0px 50px;
  background: #36373f;
  box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
  border-radius: 19px;
  height: 44px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: none;
  color: var(--frostWhite);
`;

const SearchBar = ({ setApiResult, setLoading }) => {
  const [query, setQuery] = useState("");
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .get(
        `https://api.rawg.io/api/games?search=${query}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        if (response.data.count > 0) {
          axios
            .get(
              `https://api.rawg.io/api/games/${response.data.results[0].id}?key=${process.env.REACT_APP_API_KEY}`
            )
            .then((responseTwo) => {
              setLoading(false);
              setApiResult({
                ...response.data.results[0],
                description:
                  responseTwo.data.description ||
                  "No description was found for that search!",
                website: responseTwo.data.website,
              });
            });
        } else {
          setApiResult(404);
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Search />
        <Input
          placeholder="Search for a game!"
          value={query}
          onChange={handleChange}
          required
        />
      </div>
    </Form>
  );
};

export default SearchBar;
