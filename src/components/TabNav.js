import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import EpisodeList from "./EpisodeList";
import LocationList from './LocationsList';
// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
//  TabNav 

const panes = [
    { menuItem: 'Home Page', render: () => <WelcomePage>Tab 1 Content</WelcomePage> },
    { menuItem: 'Characters', render: () => <CharacterList>Tab 2 Content</CharacterList> },
    { menuItem: 'Location', render: () => <LocationList>Tab 3 Content</LocationList> },
    { menuItem: 'Episodes', render: () => <EpisodeList>Tab 3 Content</EpisodeList> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;
