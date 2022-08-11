import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import {ArrowDownward} from '@material-ui/icons';

function GoalsPage() {
  return (
    <GoalsPageStyled>
      <Title title={'Meine'} span={'Ziele'} />
      <div className='typography'>
        <p>
          Für den Erhalt des eigenössichen Fähigkeitszeugnis EFZ ist die
          Bedingung, im letzten Jahr der Informatikmittelschule ein Praxisjahr
          zu absolvieren. Ich möchte das Praxisjahr mit bestmöglichen Noten
          abschliessen und suverän in den Arbeitsalltag starten.
          <br />
          Deshalb bin ich auf der Suche nach einer geeigneten Praktikumsstelle
          als Frontend-Entwickler.
          <br />
          Durch meine Entschlossenheit und meine Erfahrungen mit React.js und
          Node.js sehe ich mich als ein gutes Teammitglied in einer
          Softwarefirma.
        </p>
        <div className='next-page'>
          <AboutLinkStyled to='/about'>
            <ArrowDownward />
          </AboutLinkStyled>
        </div>
      </div>
    </GoalsPageStyled>
  );
}

const AboutLinkStyled = styled(Link)`
  background-color: var(--primary-color);
  color: var(--font-secondary-color);
  justify-items: center;
  align-items: center;
  font-size: 2rem;
  widht: fit-content;
  height: fit-content;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 50%;
  font-weight: bold;
`;

const GoalsPageStyled = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  .next-page {
    position: absolute;
    bottom: -20%;
    right: 50%;
    left: 50%;
    
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    p {
      padding: 0.5rem 0 1rem 0;
      @media screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export default GoalsPage;
