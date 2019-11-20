import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 10px;

  margin-bottom: 10px;

  border: 2px solid black;
`;

const Span = styled.span`
  font-weight: bold;
`;

export default function RecomendationCard(props) {
  return (
    <Card>
      <h2> {props.sName}</h2>
      <div>
        <p>
          <Span> Type: </Span> {props.type}
        </p>
        <p>
          <Span> Reveiw Comments: </Span> {props.score}
        </p>
      </div>
    </Card>
  );
}
