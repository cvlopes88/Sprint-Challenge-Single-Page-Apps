import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
//  TabNav 

const panes = [
    { menuItem: 'Welcome', render: () => <WelcomePage>Tab 1 Content</WelcomePage> },
    { menuItem: 'List of Characters', render: () => <CharacterList>Tab 2 Content</CharacterList> },
    { menuItem: 'Location', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;
