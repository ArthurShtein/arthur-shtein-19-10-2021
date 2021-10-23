import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import "./Header.css";
import App from "../../App"
import { Favourites } from "../Favourites/Favourites"

export const Header = () => {
  return (
    <header>
      <div> Herolo Weather Task </div>
      <div>
        {/* <Router>
          <Link to="/">Home </Link>
          <Link to="/favorites">Favorites </Link>
          <Switch>
            <Route path="/home">
              <App></App>
            </Route>
          </Switch>
        </Router> */}
        <Router> 
          <Switch> 
            <Route path="/favourites" component={Favourites}/>  
            <Route exact path="/" component={App}/>  
          </Switch>
        </Router>
        {/* <a href="#"> Home </a>
        <a href="#"> Favorites </a> */}
      </div>
    </header>
  );
};
