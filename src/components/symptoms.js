import React from "react";
import styled from "styled-components";
import SymptomsForm from "./SymptomsForm";

const SymptomsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
`;
const SFormContainer = styled.section`
  font-size: 1rem;
  padding:2%
  text-align:center;
`;

export default function Symptoms() {
  return (
    <SymptomsContainer>
      <h1> Hello </h1>
      <p>
        Please Select your Symptoms below. Recommendations for each symptom will
        be provided for side by side compairsion.{" "}
      </p>
      <SFormContainer>
        <SymptomsForm />
      </SFormContainer>
    </SymptomsContainer>
  );
}
