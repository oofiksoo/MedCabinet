import React from "react";
import styled from "styled-components";
import SearchForm from "./searchform";
import StrainList from "./StrainList";
const StrainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
`;
const AllStrains = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8%;
`;

export default function Strains() {
  return (
    <StrainsContainer>
      <h1> Hello</h1>
      <p> Browse all strains, or search by name! </p>
      <SearchForm />
      <AllStrains>
        <StrainList />
      </AllStrains>
    </StrainsContainer>
  );
}
