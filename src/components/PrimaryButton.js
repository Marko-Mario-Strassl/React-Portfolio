import React from 'react';
import styled from 'styled-components';

function PrimaryButton({btn}) {
    return (
        <PrimaryButtonStyled>
            {btn}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
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

export default PrimaryButton;
