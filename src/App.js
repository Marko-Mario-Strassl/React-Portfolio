import { useState, useEffect } from 'react';
import SideBar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import {MainLayout} from './styles/Layouts';
import RequestCV from './pages/RequestCV';
import GoalsPage from './pages/GoalsPage';
function App() {
  const theme = 'dark-mode';
  const [isNavToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

 
  return (
    <div className='App'>
      <SideBar isNavToggle={isNavToggle} setNavToggle={setNavToggle} />

      {/* Toggler Button for navbar*/}
      <div className='hamburger-bar'>
        <IconButton onClick={() => setNavToggle(!isNavToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Main Section Start */}
      <MainSectionStyled>
        <MainLayout>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/goals' exact element={<GoalsPage />} />
            <Route path='/about' exact element={<AboutPage />} />
            <Route path='/resume' exact element={<ResumePage />} />
            <Route path='/portfolio' exact element={<PortfolioPage />} />
            <Route path='/contact' exact element={<ContactPage />} />
            <Route path='/requestCV' exact element={<RequestCV />} />
            <Route path='/' exact element={<HomePage />} />
          </Routes>
        </MainLayout>
      </MainSectionStyled>
    </div>
  );
}

const MainSectionStyled = styled.main`
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width:1200px){
      margin-left: 0;
    }
`;

export default App;
