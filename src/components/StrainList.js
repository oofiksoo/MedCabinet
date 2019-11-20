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
  align-items: center;
`;
const StrainCardContainer = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2%;
`;
const SButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid forestgreen;
  color: forestgreen;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: forestgreen;
      color: white;
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
        <SButton name="hybrid" onClick={() => setType("Hybrid")}>
          Hybrid
        </SButton>
        <SButton name="sativa" onClick={() => setType("Sativa")}>
          Sativa
        </SButton>
      </StrainListControl>
      <h2>All {type} strains listed below:</h2>
      <StrainCardContainer>
        {strains.slice(0, 10).map(strain => {
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
