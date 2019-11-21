import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import WelcomePage from "./welcomepage";
import Symptoms from "../Symptoms/symptoms";
import Recomendations from "../Recommendations/recomendations";
import Strains from "../strains";
import logo from "../img/Logo.png";

const Dashboard = styled.div`
  display: flex;
`;
const LogoCont = styled.div`
  display: flex;
`;

const DashNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: #058a17;
  width: 12vw;
  border-bottom-right-radius: 50px;
  min-height: 95vh;
  position: fixed;
`;
const DashNavItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 50px;
  border: 0px solid black;
  color: black;
  margin: 0.3em;
  padding: 1em;
  font-weight: bold;
  text-decoration: none;
  min-width: 90%;
  cursor: pointer;
  i {
    text-decoration: none;
  }
`;

export default function DashNav() {
  const [nameToSearch, setNameToSearch] = useState();

  return (
    <Dashboard>
      <DashNavContainer>
        <LogoCont>
          <img src={logo} alt="logo" width="100%"></img>
        </LogoCont>
        <NavLink exact to="/">
          <DashNavItem>
            <i className="fas fa-home fa-3x"> </i> <p> Home </p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/symptoms">
          <DashNavItem>
            <i className="fas fa-notes-medical fa-3x"> </i>
            <p> Recommendations by Symptom </p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/recomendations">
          <DashNavItem>
            <i className="fas fa-prescription-bottle-alt fa-3x"> </i>
            <p> My Recomendations </p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/strains">
          <DashNavItem>
            <i className="fas fa-cannabis fa-3x"> </i> <p> Browse Strains </p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/symptoms" component={Symptoms} />
      <Route path="/recomendations" component={Recomendations} />
      <Route
        path="/strains"
        render={props => (
          <Strains
            {...props}
            nameToSearch={nameToSearch}
            setNameToSearch={setNameToSearch}
          />
        )}
      />
    </Dashboard>
  );
}
