import React from "react";
import styled, { css } from "styled-components";
import bud from "./bud.jpg";
const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  padding: 2%;
  border: 2px solid forestgreen;
  border-radius: 10px;
  min-width: 20vw;
  min-height: 20vh;
  max-width: 20vw;
  max-height: 20vh;
`;
const TypeDiv = styled.div`
  background-color: forestgreen;
  width: 100%;
  font-weight: bold;
  fort-size: 0.7rem;
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
      <h2> {props.sName} </h2>
      <TypeDiv>
        Type: <em> {props.race} </em>
      </TypeDiv>
    </SCard>
  );
};
export default StrainCard;
