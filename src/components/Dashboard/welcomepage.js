import React from "react";
import styled from "styled-components";

const MedFacts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13vw;
  max-width: 80%;
  ul {
    padding: 0 10%;
    text-align: left;
  }
  h3 {
    background-color: rgba(34, 139, 34, 0.5);
    border-radius: 10px;
  }
`;
const MedContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13vw;
  max-width: 80%;
  p {
    padding: 0 10%;
    text-align: left;
  }
  h3 {
    background-color: rgba(34, 139, 34, 0.5);
    border-radius: 10px;
  }
`;
const WelcomeWrapper = styled.section`
  min-height: 100%;
  min-width: 80%;
  font-family: "Script MT";
`;
const WelcomeHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 13vw;
  padding-top: 18vh;
  h2 {
    text-align: center;
  }
`;
export default function WelcomePage() {
  return (
    <WelcomeWrapper>
      <WelcomeHeader>
        <h2>Welcome to The Med Cabinet: Your medicinal Cannabis expert.</h2>
      </WelcomeHeader>
      <MedContent>
        <h3>What is medical marijuana?</h3>

        <p>
          The term medical marijuana refers to using the whole, unprocessed
          marijuana plant or its basic extracts to treat symptoms of illness and
          other conditions. The U.S. Food and Drug Administration (FDA) has not
          recognized or approved the marijuana plant as medicine. However,
          scientific study of the chemicals in marijuana, called cannabinoids,
          has led to two FDA-approved medications that contain cannabinoid
          chemicals in pill form. Continued research may lead to more
          medications. Because the marijuana plant contains chemicals that may
          help treat a range of illnesses and symptoms, many people argue that
          it should be legal for medical purposes. In fact, a growing number of
          states have legalized marijuana for medical use.
        </p>
      </MedContent>
      <MedFacts>
        <h3>Points to Remember - </h3>
        <ul>
          <li>
            The term medical marijuana refers to treating symptoms of illness
            and other conditions with the whole, unprocessed marijuana plant or
            its basic extracts.
          </li>
          <li>
            The FDA has not recognized or approved the marijuana plant as
            medicine.
          </li>
          <li>
            Scientific study of the chemicals in marijuana called cannabinoids
            has led to two FDA-approved medications in pill form, dronabinol and
            nabilone, used to treat nausea and boost appetite.
          </li>
          <li>
            Cannabinoids are chemicals related to delta-9-tetrahydrocannabinol
            (THC), marijuana’s main mind-altering ingredient.
          </li>
          <li>
            Currently, the two main cannabinoids from the marijuana plant that
            are of interest for medical treatment are THC and cannabidiol (CBD).
          </li>
          <li>The body also produces its own cannabinoid chemicals.</li>
          <li>
            Scientists are conducting preclinical and clinical trials with
            marijuana and its extracts to treat symptoms of illness and other
            conditions.
          </li>
        </ul>
        <p>
          {" "}
          Source: National Institute on Drug Abuse; National Institutes of
          Health; U.S. Department of Health and Human Services.{" "}
        </p>
      </MedFacts>
    </WelcomeWrapper>
  );
}
