import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Search from "./components/Search/Search"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Search />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
