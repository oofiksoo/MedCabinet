import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: forestgreen;
  width: 99%;
  min-height: 13.6vh;
  border-bottom-right-radius: 50px;
  h1 {
    font-size: 2rem;
    color: white;
    text-align: center;
  }
`;
export default function AppHeader() {
  return (
    <HeaderContainer>
      <h1>The Med Cabinet®</h1>
    </HeaderContainer>
  );
}
