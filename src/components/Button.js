import React from 'react';
import styled from 'styled-components';
function Button({ filter, button }) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}
const ButtonStyled = styled.button`
    outline: none;
    border:none;
    background-color:var(--primary-color);
    padding:.6rem 2rem;
    font-size:inherit;
    color:var(--font-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin: .6rem 0;
    &:active,
    &:focus{
        background-color:  #c5821e;
    }
    &:hover{
        background-color: #c5821e;
    }
    &:not(:last-child){
        margin-right: .6rem;
    }
`;

const ButtonsStyled = styled.div`
    margin-bottom:2rem;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
    width: 2.4rem auto;
`;

export default Button;
