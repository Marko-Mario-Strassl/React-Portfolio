import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .dark-mode{
        --primary-color:rgba(210,187,114,255);
        --background-color:#111;
        --sidebar-color:#000;
        --font-color:#F1F1F1;
        --font-secondary-color:#111;
        --paragraph-color:#bbb;
        --border-color:#191919;
        --border-color-2:#4c4c4c;
    }
    .light-mode{
        --primary-color:#ff9800;
        --background-color:#e5e5e5;
        --sidebar-color:#fff;
        --font-color:#191919;
        --paragraph-color:#767676;
        --border-color:#ccc;
        --border-color-2:#b2b2b2;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: var(--background-color);
        color:var(--font-color);
    }
    body::-webkit-scrollbar{
        background: #383838;
        width: 9px;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #6b6b6b;
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background:#383838;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Mulish', sans-serif; 
        font-weight: 900;
    }
    h1{
        font-size:3rem;
        @media screen and (max-width:768px){
            font-size:2.4rem;
        }
        @media screen and (max-width:625px){
            font-size:2rem;
        }
        @media screen and (max-width:300px){
            font-size:1.8rem;
        }
        span{
            color:var(--primary-color);
            font-size:3rem;
            @media screen and (max-width:768px){
                font-size:2.4rem;
            }
            @media screen and (max-width:625px){
                font-size:2rem;
            }
            @media screen and (max-width:300px){
                font-size:1.8rem;
            }
        }
    }
    a{
        font-family:inherit;
        color: inherit;
    }
    button{
        font-family: 'Montserrat', sans-serif;
        outline:none;
        border:none;
    }
    p{
        letter-spacing:.1rem;
        word-spacing:.1rem;
        color:var(--paragraph-color);
        font-size:1rem;
        @media screen and (max-width:625px){
            font-size:.9rem;
        }
    }

  
    .theme{
        transform:translateX(0%);
        z-index:20;

    }
    /* Toggler Menu */
    .hamburger-bar{
        position: absolute;
        right:5%;
        top:3%;
        z-index:15;
        display:none;
        svg{
            font-size:2.1rem;
            color:var(--font-color);
        }
    }
    .Nav-toggle{
        transform:translateX(0);
        z-index:20;
    }

    @media screen and (max-width:1200px){
        .hamburger-bar{
            display:block;
        }
    }
`;

export default GlobalStyle;