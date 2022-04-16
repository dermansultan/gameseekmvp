import { useState } from "react";
import Nav from "./components/Nav";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  const [apiResult, setApiResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App" style={{ width: "90%", margin: "0 auto" }}>
      <Nav />
      <SearchBar setLoading={setLoading} setApiResult={setApiResult} />
      <Results apiResult={apiResult} loading={loading} />
    </div>
  );
}

export default App;
