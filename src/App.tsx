import React from 'react';
import { Grommet, Header, Main, Text } from 'grommet';
import logo from './logo.svg';
import './App.css';
import PeopleList from './components/PeopleList';
import NavigationButtons from './components/NavigationButtons';

const AppHeader = () => (
  <Header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Text margin="large" size="xxlarge">
      Star Wars
    </Text>
  </Header>
);

const App = () => (
  <Grommet className="App">
    <AppHeader />
    <Main>
      <NavigationButtons />
      <PeopleList />
      <NavigationButtons />
    </Main>
  </Grommet>
);

export default App;
