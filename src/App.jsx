import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage';
import RecommendPage from './pages/RecommendPage/RecommendPage';
import Login from './pages/login/Login';
import Singup from './pages/signup/Signup';
import CommunityPage from './pages/communityPage/CommunityPage';
import styled from 'styled-components';
import MyPage from './pages/MyPage/MyPage';

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
      <BrowserRouter basename="/Delicious_connection/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/recommed" element={<RecommendPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/MyPage" element={<MyPage />} />
          </Route>

          <Route path="/community/*" element={<CommunityPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
