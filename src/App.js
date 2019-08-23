import React, { useState} from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <CharacterList /> */}
    <Route exact path="/" component={WelcomePage} />
     
      
    </main>
  );
}
