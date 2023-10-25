import React, { useState, createContext } from 'react';
import './App.css';
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Game from './Components/GameDetail';
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import AddGameForm from './Pages/AddGameFormPage';
import SearchPage from './Pages/SearchPage';
import AddedGameListPage from './Pages/AddedGameListPage';
import { OwnGame } from './types';
export const ThemeContext = createContext({ mode: 'light', setMode: (mode: string) => { } });

export default function App() {

  const [mode, setMode] = useState('light');
  const [gameLocalData, setGameLocalData] = useState<OwnGame[]>([]);

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <BrowserRouter>
        <div className="App">
          <div className={`contentWrapper ${mode === 'dark' ? styles.contentWrapperDark : ''}`}>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/games' element={<GamePage />} />
              <Route path='/game-form/' element={<AddGameForm gameLocalData={gameLocalData} setGameLocalData={setGameLocalData} />} />
              <Route path='/game-list/' element={<AddedGameListPage gameLocalData={gameLocalData} setGameLocalData={setGameLocalData} />} />
              <Route path="/games/search/" element={<SearchPage />} />

              {/* 
            <Route path='/game-form/'>
              <AddGameForm gameLocalData={gameLocalData} setGameLocalData={setGameLocalData} />
            </Route>
            <Route path='/game-list/'>
              <AddedGameListPage gameLocalData={gameLocalData} setGameLocalData={setGameLocalData} />
            </Route>
            <Route path="/games/search/">
              <SearchPage />
            </Route> */}
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
