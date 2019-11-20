import React from "react";
import styled from "styled-components";
import RecomendationsList from "./RecomendationsList";
const RecomendationsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  p {
    text-align: left;
    font-weight: bold;
  }
`;
const SRecomendationsCont = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
`;

export default function Recomendations() {
  return (
    <RecomendationsContainer>
      <SRecomendationsCont>
        <RecomendationsList />
      </SRecomendationsCont>
    </RecomendationsContainer>
  );
}
