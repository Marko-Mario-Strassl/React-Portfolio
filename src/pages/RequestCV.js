import React, { useRef } from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import emailjs from '@emailjs/browser';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
function RequestCV() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q455b8b',
        'template_uewxpdh',
        form.current,
        'D7SsMysXloPLyWclQ'
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate('/about', { replace: true });
        },
        (error) => {
          console.log(error.text);
        }
      )
      
  };
  return (
    <RequestCVStyled>
      <Title title={'Ihre'} span={'Kontaktangaben'} />
      <InnerLayout className='contact-section'>
        <form ref={form} onSubmit={sendEmail} className='form-part'>
          <h4>
            Für das Anfordern der Bewerbungsunterlagen sind Ihre Kontaktangaben
            erforderlich.
          </h4>
          <div className='form-group'>
            <label htmlFor='vorname'>Vorname</label>
            <input type='text' id='vorname' name='vorname' required />
          </div>
          <div className='form-group'>
            <label htmlFor='nachname'>Nachname</label>
            <input type='text' id='nachname' name='nachname' required />
          </div>
          <div className='form-group'>
            <label htmlFor='unternehmen'>Unternehmen</label>
            <input type='text' id='unternehmen' name='unternehmen' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Telefonnummer</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
              required
            />
            <small>Format: 012-345-67-89</small>
          </div>
          <div className='form-group'>
            <PrimaryButton type='submit' btn={'Bewerbung anfordern'} />
          </div>
        </form>
      </InnerLayout>
    </RequestCVStyled>
  );
}

const RequestCVStyled = styled.div`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .contact-info {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      h4 {
        padding: 1rem 0;
        font-size: 1.8rem;
        @media screen and (max-width: 600px) {
          font-size: 1.5rem;
        }
      }
    }
    .form-part {
      width: 100%;
      h4 {
        padding: 1rem 0;
        font-size: 1.8rem;
        @media screen and (max-width: 600px) {
          font-size: 1.5rem;
        }
      }
      .form-group {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -17px;
          display: inline-block;
          background-color: var(--background-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color-2);
          outline: none;
          background-color: transparent;
          padding: 10px 15px;
          width: 100%;
          color: inherit;
          border-radius: 0.2rem;
          background-color: transparent;
        }
        textarea {
          resize: none;
          background-color: transparent;
          border: 1px solid var(--border-color-2);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 0.2rem;
        }
      }
    }
  }
`;

export default RequestCV;
