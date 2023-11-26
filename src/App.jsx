import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// / 는 공통부문요소, index는 처음 페이지 시작