import React from 'react';
import styled from 'styled-components';

export const StyledBurger = styled.button`
   
  position: relative;
  /* top: 5%; */
  /* left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  /* margin: 10px; */

  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  margin-left: ${({ isOpen }) => isOpen ? '15px' : '0px'};
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({isOpen, setOpen}) => {
  return (
    <StyledBurger  isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;