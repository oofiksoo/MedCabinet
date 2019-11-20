import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.section `
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.6;
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: center;
`;

export default function WelcomePage() {
    return ( <
        WelcomeWrapper >
        <
        h1 > Welcome to the Med Cabinet! < /h1>{" "} <
        /WelcomeWrapper>
    );
}