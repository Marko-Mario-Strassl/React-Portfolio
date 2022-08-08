import React from 'react';
import styled from 'styled-components';

function SkillsItem({title , width, text}) {
    return (
        <SkilsItemStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width:width}}></span>
                </div>
            </div>
        </SkilsItemStyled>
    )
}

const SkilsItemStyled = styled.div`
h6{
    color: var(--font-color);
    font-size:1.1rem;
    padding-bottom: .6rem;
}
.progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height:1rem;
            background-color: var(--border-color-2);
            border-radius: 20px;
            span{
                position: absolute;
                left:0;
                bottom:0;
                height:100%;
                border-radius: 20px;
                background-color: var(--primary-color);
            }
        }
    }
`;

export default SkillsItem;
