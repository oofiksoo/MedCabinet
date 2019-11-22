import React from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
  font-size: 0.55rem;
  font-family: "Script MT";
`;

export default function AppFooter() {
  return (
    <FooterContainer>
      <p> ©2019 The Medicine Cabinet </p>
    </FooterContainer>
  );
}
