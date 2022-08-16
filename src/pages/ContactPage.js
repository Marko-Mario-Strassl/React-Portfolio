import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import ContactInfoItem from './../components/ContactInfoItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from '@emailjs/browser';
import PrimaryButton from '../components/PrimaryButton';

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [isSend, setIsSend] = useState('Nachricht senden');
  const [sent, setSent] = useState(false);
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q455b8b',
        'template_arblz9a',
        form.current,
        'D7SsMysXloPLyWclQ'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend('Nachricht wurde gesendet!');
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setIsSend(`Nachricht konnte nicht gesendet werden!${error.text}`);
        }
      );
  };
  return (
    <ContactPageStyled>
      <Title title={'Kontaktiere'} span={'Mich'} />
      <InnerLayout className='contact-section'>
        <div className='contact-info'>
          <h4>Kontakt Informationen</h4>
          <ContactInfoItem
            icon={phone}
            heading={'Mobile'}
            text={'+41 79 127 61 68'}
          />
          <ContactInfoItem
            icon={email}
            heading={'Email'}
            text={'admin@markostrassl.ch'}
          />
          <ContactInfoItem
            icon={location}
            heading={'Adresse'}
            text={'Zentralstrasse 77, 5430 Wettingen, Schweiz'}
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className='form-part'>
          <h4>Kontakt</h4>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='from_name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='from_email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='subject'>Betreff</label>
            <input type='text' id='subject' name='from_subject' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Nachricht</label>
            <textarea
              id='message'
              cols='30'
              rows='5'
              name='message'
              required></textarea>
          </div>
          <div className='form-group'>
            
            {!sent
        ? <PrimaryButton type='submit' btn={isSend} />
        : <p>{isSend}</p> 
      }
            
          </div>
        </form>
      </InnerLayout>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.div`
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

export default ContactPage;
