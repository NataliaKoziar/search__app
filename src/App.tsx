import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { ArticlePage } from './components/articlePage/ArticlePage';
import { HomePage } from './components/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/articles/:title'} element={<ArticlePage />}/>
    </Routes>
    </div>
  );
}

export default App;
