import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "./StrainCard";
import styled, { css } from "styled-components";
import SearchForm from "./searchform";

const StrainsContainer = styled.section `
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  p {
    text-align: left;
    font-weight: bold;
  }
`;
const SearchContainer = styled.div `
  padding: 2%;
`;

const StrainListControl = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 2%;
  background-color: white;
`;
const StrainCardContainer = styled.div `
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 2%;
`;
const SButton = styled.button `
  background: forestgreen;
  min-height: 15vh;
  min-width: 15vw;
  border: 1px solid forestgreen;
  border-radius: 30px 10px 30px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background: Purple;
      border: 1px solid Purple;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
      border: 1px solid red;
    `}
`;

const StrainList = props => {
  const [strains, setStrains] = useState([]);
  const [type, setType] = useState("Indica");

  useEffect(() => {
    const getStrains = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/race/${type}`
        )

        .then(response => {
          setStrains(response.data);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getStrains();
  }, [type]);

  return (
    <StrainsContainer>
      <StrainListControl>
        <SButton name="indica" onClick={() => setType("Indica")}>
          Indica
        </SButton>
        <SButton primary name="hybrid" onClick={() => setType("Hybrid")}>
          Hybrid
        </SButton>
        <SButton tertiary name="sativa" onClick={() => setType("Sativa")}>
          Sativa
        </SButton>
      </StrainListControl>
      <SearchContainer>
        <SearchForm />
      </SearchContainer>
      <p> All {type} strains listed below:</p>
      <StrainCardContainer>
        {strains.slice(0, 100).map(strain => {
          return (
            <StrainCard
              key={strain.id}
              sName={strain.name}
              race={strain.race}
              id={strain.id}
            />
          );
        })}
      </StrainCardContainer>
    </StrainsContainer>
  );
};

export default StrainList;