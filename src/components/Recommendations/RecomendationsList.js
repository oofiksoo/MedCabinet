import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "../StrainCard";
import styled, { css } from "styled-components";
const StrainsContainer = styled.section `
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  min-height: 100%;
  min-width: 99%;
  font-family: "Script MT";
  p {
    text-align: left;
    font-weight: bold;
    font-family: "Script MT";
  }
  h3 {
    background-color: rgba(34, 139, 34, 0.5);
    border-radius: 20px;
    margin-left: 1%;
  }
`;
const StrainListControl = styled.div `
  display: flex;
  justify-content: space-around;
  font-family: "Script MT";
`;
const StrainCardContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: "Script MT";
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
  font-family: "Script MT";
  font-size: 1.5rem;
  font-weight: bold;
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
      <h3>Recommended {type} strains listed below:</h3>
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