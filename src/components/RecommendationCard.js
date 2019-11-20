import React from "react";
import styled from "styled-components";
import bud from "./bud.jpg";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 10vw;
  min-height: 10vh;
  margin: 2%;
  align-items: center;
  border: 2px solid black;
  padding:2%
  font-size:.7rem;
`;

export default function RecommendationCard(props) {
  return (
    <Card>
      <img src={bud} alt="flower_image" width="60vw" height="50vh" />
      <h2> {props.sName} </h2>{" "}
      <div className="Type">
        Type: <em> {props.race} </em>{" "}
      </div>{" "}
    </Card>
  );
}
