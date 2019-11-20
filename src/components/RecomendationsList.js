import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "./StrainCard";
import styled, { css } from "styled-components";

const StrainsContainer = styled.section`
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
const StrainListControl = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2%;
`;
const StrainCardContainer = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2%;
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

function RecomendationList(recomendation) {
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
          console.log(response);
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
      <p>Recommended {type} strains listed below:</p>
      <StrainCardContainer>
        {strains.slice(210, 260).map(strain => {
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
export default RecomendationList;
