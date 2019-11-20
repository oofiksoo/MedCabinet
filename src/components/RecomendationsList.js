import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "./StrainCard";
import styled, { css } from "styled-components";

const StrainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
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
  min-height: 20vh;
  min-width: 20vw;
  border-radius: 20px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background: Purple;
      color: white;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
    `}
`;

function RecomendationList(recomendation) {
  const [strains, setStrains] = useState([]);
  const [type, setType] = useState("Indica");

  useEffect(() => {
    const getStrains = () => {
      axios

        .get(
          `http://strainapi.evanbusse.com/VUGyzwt/strains/search/race/${type}`
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
      <h2>Reccomended {type} strains listed below:</h2>
      <StrainCardContainer>
        {strains.slice(390, 410).map(strain => {
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
