import React from "react";
import styled from "styled-components";
import RecomendationsList from "./RecomendationsList";
const RecomendationsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
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
      <h1> Hello $username </h1>
      <p> Please review your Reccomended strains below: </p>
      <SRecomendationsCont>
        <RecomendationsList />>
      </SRecomendationsCont>
    </RecomendationsContainer>
  );
}
