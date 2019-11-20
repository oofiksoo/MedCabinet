import React from "react";
import styled from "styled-components";
import bud from "./bud.jpg";
const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 10px;
  min-width: 25vw;
  min-height: 15vh;
`;

const StrainCard = props => {
  return (
    <SCard>
      <img src={bud} alt="flower_image" width="80vw" height="80vh"></img>
      <h2>
        {props.id} - {props.sName}
      </h2>
      <div className="Type">
        Type: <em> {props.race} </em>
      </div>
      {/* <h3> Medical Effects </h3>
      {medical.map((medical, index) => (
        <div key={index} className="medical-effects">
          {medical}
        </div> */}
    </SCard>
  );
};
export default StrainCard;
