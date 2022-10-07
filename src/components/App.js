import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/App.css";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Documentaries from "./Documentaries";
import WatchList from "./WatchList";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/d")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/movies">
          <Movies films={films} />
        </Route>
        <Route exact path="/series">
          <Series films={films} />
        </Route>
        <Route exact path="/documentaries">
          <Documentaries />
        </Route>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home films={films} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
