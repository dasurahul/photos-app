import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import { Route, useHistory } from "react-router-dom";
import Search from "./pages/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&per_page=10"
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  const submitHandler = (input) => {
    history.push(`/${input}`);
  };
  return (
    <div>
      <Route path="/" exact>
        <Navbar />
        <Form onSubmit={submitHandler} />
        <Photos items={items} />
      </Route>
      <Route path="/:query">
        <Search />
      </Route>
    </div>
  );
};

export default App;
