import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import portrait from './../images/portrait.jpg';




function AboutPage() {
   return (
    <AboutPageStyled>
      <Title title={'Über'} span={'Mich'} />
      <InnerLayout className='about-section'>
        <div className='image-part'>
          <img src={portrait} alt='' />
        </div>
        <div className='info-part'>
          <h4>Wer bin ich?</h4>
          <h3>
            Ich bin <span>Marko-Mario Strassl</span>
          </h3>
          <p>
            Ich bin im letzten Jahr der Informatikmittelschule in Baden.Ich habe
            Erfahrung im Programmieren von Webseiten mit React.js, Node.js,
            HTML5, CSS und mehr.{' '}
          </p>
          <div className='information'>
            <ul>
              <li>Vor- und Nachname</li>
              <li>Alter</li>
              <li>Nationalität</li>
              <li>Sprachen</li>
              <li>Adresse</li>
            </ul>
            <ul className='details'>
              <li>Marko-Mario Strassl</li>
              <li>20 Jahre</li>
              <li>Schweiz</li>
              <li>Deutsch, Englisch, Französisch</li>
              <li>
                Zentralstrasse 77 <br /> 5430 Wettingen <br /> Schweiz
              </li>
            </ul>
          </div>

          <DownloadStyled
            target="_blank"
            href='https://firebasestorage.googleapis.com/v0/b/backend-markostra.appspot.com/o/CV%2FMarkoStrassl_Bewerbung.pdf?alt=media&token=e474c307-6c82-45a2-8a0d-af485dd00ae5'
          >Download CV</DownloadStyled>
        </div>
      </InnerLayout>
    </AboutPageStyled>
  );
}
const DownloadStyled = styled.a`
  background-color: var(--primary-color);
  color: var(--font-color);
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 1.5rem;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    padding: 0.8rem 1.8rem;
  }
`;

const AboutPageStyled = styled.div`
    .about-section{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:.8rem;
        @media screen and (max-width:800px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap:1.5rem;
        }
        .image-part{
            height:100%;
            width:100%;
            img{
                
                width:80%;
                border:2px solid var(--border-color);  
            }
        }
        .info-part{
            h4{
                color:var(--primary-color);
                font-size:1.3rem;
            }
            h3{
                margin:1rem 0;
                font-size:1.9rem;
                span{
                    color:var(--primary-color);
                }
            }
            p{
                font-size:.9rem;
            }
            .information{
                margin:.5rem 0;
                width:90%;
                display:flex;
                justify-content: space-between;
                @media screen and (max-width:500px){
                    width:100%;
                }
                ul{
                    li{
                        margin:.5rem 0;
                        @media screen and (max-width:500px){
                            margin:1rem 0;
                            font-size:.9rem;
                        }
                    }
                }
                .details{
                    color:var(--paragraph-color);
                }
            }
           
        }
    }

    .rec-arrow{
        background-color: var(--border-color);
        &:hover{
            background-color: var(--primary-color);
        }
        &:active,&:focus{
            background-color: var(--primary-color);
        }
    }
    .rec-dot_active{
            box-shadow:none;
            background-color:var(--primary-color);
    }
    @media screen and (max-width:500px){
        .rec.rec-arrow{
            display:none;
        } 
    }
`;

export default AboutPage;
