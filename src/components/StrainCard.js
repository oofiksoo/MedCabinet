import React from "react";
import styled, { css } from "styled-components";
import bud from "../components/img/bud.jpg";
const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  padding: 1%;
  border: 2px solid forestgreen;
  border-radius: 10px;
  min-width: 15vw;
  min-height: 15vh;
  max-width: 15vw;
  max-height: 15vh;
  font-size: 0.9rem;
  img {
    border-radius: 20px;
  }
`;
const TypeDiv = styled.div`
  background-color: forestgreen;
  width: 100%;
  font-weight: bold;
  font-size: 0.6rem;
  ${props =>
    props.primary &&
    css`
      background: Purple;
      border: 1px solid Purple;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
      border: 1px solid red;
    `}
`;

const StrainCard = props => {
  return (
    <SCard>
      <img src={bud} alt="flower_image" width="80vw" height="80vh" />
      <p> {props.sName} </p>
      <TypeDiv>
        Type: <em> {props.race} </em>
      </TypeDiv>
    </SCard>
  );
};
export default StrainCard;
