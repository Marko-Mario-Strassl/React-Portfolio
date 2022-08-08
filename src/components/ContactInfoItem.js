import React from 'react';
import styled from 'styled-components';
function ContactInfoItem({icon, heading, text}) {
    return (
        <ContactInfoItemStyled>
            <div className="icon">
                {icon}
            </div>
            <div className="info">
                <p className="bold-text"> {heading} </p>
                <p className="small-text"> {text} </p>
            </div>
        </ContactInfoItemStyled>
    )
}

const ContactInfoItemStyled = styled.div`
    display:flex;
    align-items: center;
    position:relative;
    margin:0.5rem 0;
    @media screen and (max-width:768px){
        margin:1rem 0;
        padding:1rem 0;
    }
    &::before{
        content:'';
        height:100%;
        width:.1rem;
        position:absolute;
        left:3rem;
        top:0;
        background-color:var(--border-color-2);
    }
    .icon{
        width:20%;
        @media screen and (max-width:768px){
            width:40%;
        }
        svg{
            font-size:2rem;
            color:var(--primary-color);
            
        }
    }
    .info{
        width:80%;
        @media screen and (max-width:768px){
            width:60%;
        }
        .bold-text{
            font-weight:700;
            color:var(--font-color);
        }
        .small-text{
            font-size:0.8rem;
        }
    }
`;

export default ContactInfoItem;
