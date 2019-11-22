import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import WelcomePage from "./welcomepage";
import Symptoms from "../Symptoms/symptoms";
import Recomendations from "../Recommendations/recomendations";
import Strains from "../strains";
import logo from "../img/Logo.png";
import SearchForm from "../searchform";
import DisplayDispensary from "../DispensaryLocator/DisplayDispensary";
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
  background-color: rgba(34, 139, 34, 0.5);
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
  font-family: "Script MT";
  font-size: 1rem;
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
          <img src={logo} alt="logo" width="100%" />
        </LogoCont>
        <NavLink exact to="/">
          <DashNavItem>
            <i className="fas fa-home fa-3x"> </i> <p> Home </p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/symptoms">
          <DashNavItem>
            <i className="fas fa-notes-medical fa-3x"> </i>
            <p> Symptom Matcher</p>
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
        <NavLink to="/DisplayDispensary">
          <DashNavItem>
            <i className="fas fa-search-location fa-3x"></i>
            <p> Dispensary Locator</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/symptoms" component={Symptoms} />
      <Route path="/recomendations" component={Recomendations} />
      <Route
        path="/strains"
        render={props => (
          <SearchForm
            {...props}
            setNameToSearch={setNameToSearch}
            nameToSearch={nameToSearch}
          />
        )}
      />
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
      <Route path="/DisplayDispensary" component={DisplayDispensary} />
    </Dashboard>
  );
}
