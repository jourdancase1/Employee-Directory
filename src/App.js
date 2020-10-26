import React from 'react';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search"

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
