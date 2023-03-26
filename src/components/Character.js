// Write your Character component here
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledCharacter = styled.div`
    width= 18rem;
    display: flex;
    justify-content: space-around;
    padding: 8px;
`;

const StyledName = styled.h2`
  border: 5px solid black;
  border-radius: 6%;
`;

const Character = (props) => {
  return (
    <StyledCharacter>
      <StyledName>{props.people.name}</StyledName>
    </StyledCharacter>
  );
};

export default Character;
