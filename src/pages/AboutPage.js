import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import portrait from './../images/portrait.jpg';
import { Link } from 'react-router-dom';





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
             Ich bin im letzten Jahr der Informatikmittelschule in Baden und auf
             der Suche nach einer Praktikumsstelle als Softwareentwickler. In
             meiner Freizeit bilde ich mich auf dem Gebiet Frontend und Backend
             mit React.js und Node.js weiter. Ausserdem arbeite ich an den
             Wochenenden mit viel Freude im Nordportal Baden.{' '}
           </p>
                      <div className='information'>
             <ul>
               <li>Name</li>
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
           <div className='download-part'>
             <div className='download-part1'>
               <DownloadCVStyled
                 target='_blank'
                 href='https://firebasestorage.googleapis.com/v0/b/backend-markostra.appspot.com/o/CV%2FMarkoStrassl_Lebenslauf.pdf?alt=media&token=9abeb454-1838-4831-a495-ddae99d6eb27'>
                 Lebenslauf herunterladen
               </DownloadCVStyled>
             </div>
             <div className='download-part2'>
               <LinkStyled to='/requestCV'>
                 Bewerbungsunterlagen anfordern
               </LinkStyled>
             </div>
           </div>
         </div>
       </InnerLayout>
     </AboutPageStyled>
   );
}
const DownloadCVStyled = styled.a`
  background-color: var(--primary-color);
  color: var(--font-secondary-color);
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

const LinkStyled = styled(Link)`
  background-color: var(--primary-color);
  color: var(--font-secondary-color);
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 1.5rem;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  width: fit-content;
  margin-left: 1rem;
  &:hover {
    padding: 0.8rem 1.8rem;
  }
  @media screen and (max-width: 1500px) {
    margin-left: 0;
    
  }
`;

const AboutPageStyled = styled.div`
  .about-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.8rem;
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
    }
    .download-part {
      display: flex;
      flex-wrap: wrap;

      @media screen and (max-width: 1500px) {
        display: flex;
        flex-direction: column;
        width: max-content;
      }
      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: row;
        width: max-content;
        font-size: 1rem;
      }
      @media screen and (max-width: 550px) {
        display: flex;
        flex-direction: column;
        width: max-content;
        font-size: 1rem;
      }
    }
    .download-part1 {
      padding-bottom: 2rem;
    }
    .image-part {
      height: 100%;
      width: 100%;
      img {
        width: 80%;
        border: 2px solid var(--border-color);
      }
    }
    .info-part {
      h4 {
        color: var(--primary-color);
        font-size: 1.3rem;
      }
      h3 {
        margin: 1rem 0;
        font-size: 1.9rem;
        span {
          color: var(--primary-color);
        }
      }
      p {
        font-size: 0.9rem;
      }
      .information {
        margin: 0.5rem 0;
        width: 90%;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 500px) {
          width: 100%;
        }
        ul {
          margin-right: 1rem;
          li {
            margin: 0.5rem 0;
            @media screen and (max-width: 500px) {
              margin: 1rem 0;
              font-size: 0.9rem;
            }
            @media screen and (max-width: 917px) {
              font-size: 0.8rem;
            }
            @media screen and (max-width: 800px) {
              font-size: 1rem;
            }
          }
        }
        .details {
          color: var(--paragraph-color);
        }
      }
    }
  }

  
`;

export default AboutPage;
