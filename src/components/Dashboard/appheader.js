import React from "react";
import styled from "styled-components";
import logo from "../img/Logo.png";
const HeaderContainer = styled.section`
  display: flex;
  h1 {
    font-size: 2rem;
    color: forestgreen;
`;
const LogoCont = styled.div`
  display: flex;
`;

export default function AppHeader() {
  return (
    <HeaderContainer>
      <LogoCont>
        <img src={logo} alt="logo" width="25%"></img>
      </LogoCont>
      <h1>The Med Cabinet®</h1>
    </HeaderContainer>
  );
}
