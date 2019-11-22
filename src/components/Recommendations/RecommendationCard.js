import React from "react";
import styled from "styled-components";
import bud from "../img/bud.jpg";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 12vw;
  min-height: 18vh;
  max-width:12vw;
  max-height:18vh;
  margin: 1%;
  align-items: center;
  border: 2px solid forestgreen;
  border-radius:5px;
  padding:1%
  font-size:.7rem;
  font-weight: bold;
  font-family: "Script MT";
  background-color:whitesmoke;
  h4{
    font-size:1rem;
    font-weight: bold;
    white-space:nowrap;
  }
  img{
    border-radius: 10px;
    margin-top:1rem;
  }
`;
const TypeDiv = styled.div`
  background-color: rgba(34, 139, 34, 0.5);
  width: 100%;
  font-weight: bold;
  fort-size: 0.6rem;
  font-family: "Script MT";
  border-radius: 20px;
`;

export default function RecommendationCard(props) {
  return (
    <Card>
      <TypeDiv>
        Type: <em> {props.race} </em>{" "}
      </TypeDiv>
      <img src={bud} alt="flower_image" width="60vw" height="50vh" />
      <h4> {props.sName} </h4>
      <p>Reccomendation Score: {props.id}</p>
    </Card>
  );
}
