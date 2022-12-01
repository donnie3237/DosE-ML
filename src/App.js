import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage.tsx';
import Headers from './components/MainPage/components/Headers/Headers.tsx';
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage.tsx';
import Document from './components/Document/Document.tsx';
function App() {
  return (
    <div className="App">
      <Router>
        <FirstPage/>
        <Headers/>
          <Routes>
              <Route path='/' element={<MainPage/>}></Route>
              <Route path='/document' element={<Document/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
