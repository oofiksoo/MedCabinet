import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  padding-left: 12vw;
  background-color: rgba(34, 139, 34, 0.5);
  width: 87%;
  min-height: 13.6vh;
  border-bottom-right-radius: 50px;
  h1 {
    font-family: "Script MT";
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
