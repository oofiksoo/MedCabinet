import React from "react";
import styled, { css } from "styled-components";
import bud from "../components/img/bud.jpg";
const SCard = styled.div`
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  padding: 1%;
  border: 2px solid forestgreen;
  border-radius: 10px;
  min-width: 16vw;
  min-height: 16vh;
  max-width: 16vw;
  max-height: 16vh;
  font-size: 0.9rem;
  font-family: "Script MT";
  p {
    margin: 1rem;
    font-size: 1.2rem;
  }
  img {
    border-radius: 20px;
    margin: 0.5rem;
  }
`;
const TypeDiv = styled.div`
  background-color: rgba(34, 139, 34, 0.5);
  width: 100%;
  font-weight: bold;
  font-size: 0.9rem;
  font-family: "Script MT";
  border-radius: 20px;
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
      <TypeDiv>
        Type: <em> {props.race} </em>
      </TypeDiv>
      <img src={bud} alt="flower_image" width="80vw" height="80vh" />
      <p> {props.sName} </p>
    </SCard>
  );
};
export default StrainCard;
