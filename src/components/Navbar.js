import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo_big from './../images/logo_big.svg';
function Navbar({ setNavToggle }) {
  return (
    <NavbarStyled>
      <div className="avatar-logo">
        <img src={logo_big} alt="Logo" />
      </div>
      <ul className="nav-items">
        <li><NavLink to="/" exact activeClassName="active-menu" onClick={() => setNavToggle(false)}>Home</NavLink></li>
        <li><NavLink to="/about" exact activeClassName="active-menu" onClick={() => setNavToggle(false)}>Über Mich</NavLink></li>
        <li><NavLink to="/resume" exact activeClassName="active-menu" onClick={() => setNavToggle(false)}>Lebenslauf</NavLink></li>
        <li><NavLink to="/portfolio" exact activeClassName="active-menu" onClick={() => setNavToggle(false)}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" exact activeClassName="active-menu" onClick={() => setNavToggle(false)}>Kontakt</NavLink></li>
      </ul>
      <footer>
        <p>Ⓒ{new Date().getFullYear()} Marko-Mario Strassl</p>
      </footer>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.header`
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-right:2px solid var(--border-color);

  .avatar-logo{
    width:100%;
    height: 25%;
    border-bottom: 1px solid var(--border-color);
    text-align:center;
    padding: 1rem 0;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      height:100%;
      
    }
  }

  .nav-items{
    width:100%;
    text-align: center;
    .active-menu{
        color: var(--primary-color);
        font-size:1.1rem;
    }
    li{
      display: block;
      a{
        font-size:1rem;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0.45rem 0;
        display: block;
        &:hover{
            cursor: pointer;
            color:var(--primary-color);
        }
      }
    }
  }

  footer{
        border-top:1px solid var(--border-color);
        width: 100%;
        p{
            padding: .3rem 0;
            font-size: 0.9rem;
            text-align:center;
        }
  }
`;

export default Navbar;
