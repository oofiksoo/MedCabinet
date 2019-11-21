import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "../StrainCard";
import styled, { css } from "styled-components";
import SearchForm from "../searchform";
const StrainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  p {
    padding: 0 1%;
    text-align: left;
    font-weight: bold;
  }
`;
const StrainListControl = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2%;
`;
const StrainCardContainer = styled.div`
  margin: 0 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
`;
const SButton = styled.button`
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

export default function RecomendationList(props) {
  const [strains, setStrains] = useState([]);
  const [type, setType] = useState("Indica");
  const [nameToSearch, setNameToSearch] = useState();
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
      <SearchForm
        {...props}
        setNameToSearch={setNameToSearch}
        nameToSearch={nameToSearch}
      />
      <p>Recommended {type} strains listed below:</p>
      <StrainCardContainer>
        {strains.slice(208, 260).map(strain => {
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
}
