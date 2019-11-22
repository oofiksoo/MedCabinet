import React from "react";
import styled from "styled-components";
const DLContainer = styled.div`
  padding-left: 13vw;
  padding-top: 18vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: "Script MT";
`;
const DLocator = styled.div`
  display: flex;
  justfiy-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 48.75vh;
  width: 24vw;
  margin: 2%;
  h3 {
    background-color: rgba(34, 139, 34, 0.5);
    border-radius: 20px;
    padding: 0 5%;
  }
  iframe {
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    align-content: center;
    border: 2px solid forestgreen;
    border-radius: 10px;
    height: 100%;
    width: 100%;
  }
`;
const TStrains = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
  align-content: center;
  height: 48.75vh;
  width: 24vw;
  margin: 2%;
  h3 {
    background-color: rgba(34, 139, 34, 0.5);
    border-radius: 20px;
    padding: 0 5%;
  }
  iframe {
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    align-content: center;
    border: 2px solid forestgreen;
    border-radius: 10px;
    height: 100%;
    width: 100%;
  }
`;
export default function DisplayDispensary() {
  return (
    <DLContainer>
      <DLocator>
        <h3>Local Dispensary Information:</h3>
        <iframe
          src="http://www.thcfinder.com/webapi/?sid=0&near=5&strains=0&blog=0"
          title="Dispensary_Locator"
        ></iframe>
      </DLocator>
      <TStrains>
        <h3>Popular Local Strain Information:</h3>
        <iframe
          src="http://www.thcfinder.com/webapi/?sid=0&near=0&strains=5&blog=0"
          title="Top_Strains"
        ></iframe>
      </TStrains>
    </DLContainer>
  );
}
