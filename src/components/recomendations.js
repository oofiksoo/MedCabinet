import React from "react";
import styled from "styled-components";
import RecomendationsList from "./RecomendationsList";
const RecomendationsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.6;
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: center;
  p {
    text-align: left;
    font-weight: bold;
  }
`;
const SRecomendationsCont = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  padding: 2%;
`;

export default function Recomendations() {
  return (
    <RecomendationsContainer>
      <SRecomendationsCont>
        <RecomendationsList />>
      </SRecomendationsCont>
    </RecomendationsContainer>
  );
}
