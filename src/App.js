import React from "react";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Link, Route } from "react-router-dom";


export default function App() {
  return (

    <main>
      
<Link to="/search">Search</Link>
<Link to="/"> Home </Link>
<Link to="/characters"> Characters </Link>

<Route exact path="/" component={WelcomePage} />
<Route path="/characters" component={CharacterList}/>
<Route path="/search" component={SearchForm} />

    </main>
  );
};



