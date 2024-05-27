import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './Components/Header/header';
import { Nav } from './Components/Nav/nav';
import { Post } from './Components/Post/post';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container">
        <Post />
      </div>
    </div>
  );
}

export default App;
