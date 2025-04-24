// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import LoginSingup from "./components/LoginSignup";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchResults";
import ThreeImageScroll from "./ThreeImageScroll";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <nav className="navbar">
          <button className="nav-btn">
            <Link to="/">Home</Link>
          </button>
          <button className="nav-btn">
            <Link to="/shop">Shop</Link>
          </button>

          <button className="nav-btn">
            <Link to="/LoginSingup">Login & Sign Up</Link>
          </button>
          <button className="nav-btn">
            <Link to="/contact">Contact Us</Link>
          </button>

          <SearchBar className="search-nav"> </SearchBar>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/LoginSingup" component={LoginSingup} />
        </Switch>
        <ThreeImageScroll></ThreeImageScroll>
      </div>
    </Router>
  );
}

export default App;
