import React from "react";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import { Favourites } from "./cmps/Favourites/Favourites";
import { Header } from "./cmps/Header/Header";

import { Home } from "./cmps/Home/Home";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <main>
        <Switch>
          <Route excact path="/favourites" component={Favourites} />
          <Route excact path="/" component={Home} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
