import React from "react";
import styled from "styled-components";
import Favorites from "./Favorites";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  color: black;
`;
const LogoCont = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const FavoritesContainer = styled.div``;

export default function AppHeader() {
  return (
    <HeaderContainer>
      <LogoCont>
        <img src="../../Logo.png" alt="logo" width="25%"></img>
      </LogoCont>
      <FavoritesContainer></FavoritesContainer>
    </HeaderContainer>
  );
}
