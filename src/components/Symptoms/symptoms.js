import React from "react";
import styled from "styled-components";
import SymptomsForm from "./SymptomsForm";
const Introduction = styled.div`
  text-align: center;
`;
const SymptomsContainer = styled.section`
  padding-left: 13vw;
  padding-top: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: cnter;
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  p {
    text-align: center;
  }
`;
const SFormContainer = styled.section`
  font-size: 1rem;
  padding:2%
  text-align:center;
`;

export default function Symptoms() {
  return (
    <SymptomsContainer>
      <Introduction>
        <h1> Compare Strains side - by - side based on your Symptoms:</h1>
        <p>
          Please Select your Symptoms below. Recommendations for each symptom
          will be provided for side by side compairsion. For the best
          experiance, a minimum of 2 Symptoms is required.
        </p>
      </Introduction>
      <SFormContainer>
        <SymptomsForm />
      </SFormContainer>
    </SymptomsContainer>
  );
}
