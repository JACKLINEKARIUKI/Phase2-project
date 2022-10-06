import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Movies from "./Movies";
import Series from "./Series";
import Documentaries from "./Documentaries";
import WatchList from "./WatchList";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/series">
          <Series />
        </Route>
        <Route exact path="/documentaries">
          <Documentaries />
        </Route>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
