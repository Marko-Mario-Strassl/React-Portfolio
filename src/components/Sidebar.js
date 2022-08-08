import styled from 'styled-components';
import React from 'react';
import Navbar from './Navbar';

function Sidebar({isNavToggle, setNavToggle}) {
    return (
        <SideBarStyled className={isNavToggle ? 'Nav-toggle' : ''}>
            <Navbar setNavToggle={setNavToggle}/>
        </SideBarStyled>
    )
}

const SideBarStyled = styled.div`
    position: fixed;
    width: 16.3rem;
    height: 100vh;
    background-color:var(--sidebar-color);
    overflow:hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform:translateX(-100%);
        z-index:20;
    }
    @media screen and (max-width:330px){
        width: 13rem;
    }
`;

export default Sidebar;
