import React from 'react';
import styled from 'styled-components';

function Title({ title, span}) {
    return (
        <TitleStyled>
            <h1>{title} <span> {span} </span></h1>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
text-transform: capitalize;
letter-spacing:.1rem;
h1{
    position: relative;
    &::before{
        content:'';
        position: absolute;
        width:6.8rem;
        height:.3rem;
        border:2px solid var(--border-color-2);
        left:0;
        bottom:-10px;
        border-radius: 10px;
    }
    &::after{
        content:'';
        position: absolute;
        width:3.5rem;
        height:.3rem;
        background-color: var(--primary-color);
        left:0;
        bottom:-8px;
        border-radius: 10px;
    }
}
`;

export default Title;
