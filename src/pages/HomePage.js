import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function HomePage() {
    return (
      <HomePageStyled>
        <div className='typography'>
          <h1>
            Hallo, ich bin <span>Marko Strassl</span>
          </h1>
          <p>
            Ich bin Softwareentwickler und besuche die Informatikmittelschule in
            Baden. Ich habe Erfahrung im Programmieren und Designen von
            Webseiten.{' '}
          </p>

          <div className='social-icons'>
            <a href='https://github.com/Marko-Mario-Strassl' target='__blank'>
              {' '}
              <GitHubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/markostrassl/'
              target='__blank'>
              {' '}
              <LinkedInIcon />
            </a>
            <a
              href='https://instagram.com/_xmarko2002x_?igshid=YmMyMTA2M2Y='
              target='__blank'>
              {' '}
              <InstagramIcon />
            </a>
          </div>
        </div>
      </HomePageStyled>
    );
}

const HomePageStyled = styled.div`
   width: 100%;
    height: 90vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align:center;
        width: 80%;
        @media screen and (max-width:600px){
            width: 100%;
        }
        p{
            padding:0.5rem 0 1rem 0;
            @media screen and (max-width:600px){
                font-size:0.8rem;
            }
        }
    }
    .social-icons{
        display:flex;
        align-items: center;
        justify-content: center;
        a{
            display:flex;
            align-items: center;
            justify-content: center;
            padding:0.7rem;
            border-radius:50%;
            border:2px solid var(--border-color);
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            margin:0 .5rem;
            @media screen and (max-width:625px){
                margin:0 .1rem;
                padding:0.5rem;
            }
            svg{
                color:var(--font-color);
                font-size:1.4rem;
                @media screen and (max-width:625px){
                    font-size:1.1rem;
                }
            }
            &:hover{
                    border: 2px solid var(--primary-color);
                    &:hover svg{
                        color:var(--primary-color);
                        opacity:0.5;
                    }
            }
        }
        
    }
`;

export default HomePage;
