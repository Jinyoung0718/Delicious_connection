import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage';
import RecommendPage from './pages/RecommendPage';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const ContentContainer = styled.div`
  flex: 1; 
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Nav />

      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <Footer />
    </LayoutContainer>
  );
};


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/recommed" element={<RecommendPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
