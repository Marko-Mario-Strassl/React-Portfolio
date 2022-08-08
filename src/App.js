import { useState, useEffect } from 'react';
import SideBar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { Switch as Switching, Route, Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import {MainLayout} from './styles/Layouts';
function App() {
  const theme = 'dark-mode';
  const [isNavToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

 
  return (
    <div className="App">
      <SideBar isNavToggle={isNavToggle} setNavToggle={setNavToggle} />

      


      {/* Toggler Button for navbar*/}
      <div className="hamburger-bar">
        <IconButton onClick={() => setNavToggle(!isNavToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Main Section Start */}
      <MainSectionStyled>
      <MainLayout>
        <Switching>
          <Route path="/" exact> <HomePage /> </Route>
          <Route path="/about" exact> <AboutPage /> </Route>
          <Route path="/resume" exact> <ResumePage /> </Route>
          <Route path="/portfolio" exact> <PortfolioPage /> </Route>
          <Route path="/contact" exact> <ContactPage /> </Route>
          <Redirect to="/" />
        </Switching>
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
