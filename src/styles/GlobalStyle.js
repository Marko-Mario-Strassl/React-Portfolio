import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .dark-mode{
        --primary-color:rgba(210,187,114,255);
        --background-color:#111;
        --sidebar-color:#000;
        --font-color:#F1F1F1;
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

    /* Setting Wheel Toggler */
    .setting-wheel{
        position: fixed;
        right:0;
        top:40%;
        background: var(--primary-color);
        width:2rem;
        height:2rem;
        z-index: 15;
        display:flex;
        align-items: center;
        justify-content: center;
        svg{
            font-size:1.5rem;
            color:var(--font-color);
            -webkit-animation: rotating 1s linear infinite;
            -moz-animation: rotating 1s linear infinite;
            -ms-animation: rotating 1s linear infinite;
            -o-animation: rotating 1s linear infinite;
            animation: rotating 1s linear infinite;
            @keyframes rotating {
                from{
                    -ms-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -webkit-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to{
                    -ms-transform: rotate(360deg);
                    -moz-transform: rotate(360deg);
                    -webkit-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }

        }
    }

    /*Floating Toggler*/
    .light-dark-mode{
        position: fixed;
        right:0;
        top:46%;
        background: var(--primary-color);
        width:6.0rem;
        height:2.5rem;
        z-index: 15;
        display:flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: all .4s ease-in-out;
        transform:translateX(100%);
        z-index:20;
        svg{
            display:flex;
            align-items: center;
            font-size:1.5rem;
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