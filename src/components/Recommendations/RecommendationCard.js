import React from "react";
import styled from "styled-components";
import bud from "../img/bud.jpg";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 10vw;
  min-height: 15vh;
  max-width:10vw;
  max-height:15vh;
  margin: 1%;
  align-items: center;
  border: 2px solid forestgreen;
  border-radius:5px;
  padding:1%
  font-size:.6rem;
`;
const TypeDiv = styled.div`
  background-color: forestgreen;
  width: 100%;
  font-weight: bold;
  fort-size: 0.7rem;
`;

export default function RecommendationCard(props) {
  return (
    <Card>
      <img src={bud} alt="flower_image" width="60vw" height="50vh" />
      <h2> {props.sName} </h2>{" "}
      <TypeDiv>
        Type: <em> {props.race} </em>{" "}
      </TypeDiv>{" "}
    </Card>
  );
}
