import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled, { css } from "styled-components";
import RecommendationCard from "./RecommendationCard";
const apiEndPoint = "";
const SQuestionCont = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2%;
  p {
    text-align: left;
    font-weight: bold;
  }
`;
const QCont = styled.div`
  display: flex;
  justify-content: space-around;
`;
const RecContainer = styled.div`
  padding: 2%;
  display: flex;
`;

const SButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid forestgreen;
  color: forestgreen;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: forestgreen;
      color: white;
    `}
`;

const SymptomsForm = ({ values, errors, touched, status }) => {
  const [recommendation, setRecommendation] = useState([]);
  const [recommendation2, setRecommendation2] = useState([]);
  const [symptom2, setSymptom2] = useState();
  const [symptom, setSymptom] = useState();

  useEffect(() => {
    const getRecommendation = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom}`
        )

        .then(response => {
          setRecommendation(response.data);
          console.log(response);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation();
  }, [symptom]);
  useEffect(() => {
    const getRecommendation2 = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom2}`
        )

        .then(response => {
          setRecommendation2(response.data);
          console.log(response);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation2();
  }, [symptom2]);
  return (
    <Form>
      <SQuestionCont>
        <QCont>
          <p> Select Symptom 1: </p>
          <Field
            as="select"
            className="Symptom"
            name="Symptom1"
            onChange={e => {
              setSymptom(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="">Select A Symptom</option>
            <option value="Depression">Depression</option>
            <option value="Stress">Stress</option>
            <option value="Insomnia">Insomnia</option>
            <option value="Pain">Pain</option>
            <option value="Muscle Spasms">Muscle Spasms</option>
            <option value="Inflammation">Inflammation</option>
            <option value="Fatigue">Fatigue</option>
            <option value="Hungry">Lack of Appitite</option>
            <option value="Seizures">Seizures</option>
            <option value="Cramps">Cramps</option>
          </Field>
          {touched.Symptom1 && errors.Symptom1 && (
            <p className="error-display"> {errors.Symptom1} </p>
          )}
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation.slice(11, 16).map(strain => {
            return (
              <RecommendationCard
                key={strain.id}
                sName={strain.name}
                race={strain.race}
                id={strain.id}
              />
            );
          })}
        </RecContainer>
      </SQuestionCont>
      <hr></hr>
      <SQuestionCont>
        <QCont>
          <p> Select Symptom 2: </p>
          <Field
            as="select"
            className="Symptom"
            name="Symptom2"
            onChange={e => {
              setSymptom2(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="">Select A Symptom</option>
            <option value="Depression">Depression</option>
            <option value="Stress">Stress</option>
            <option value="Insomnia">Insomnia</option>
            <option value="Pain">Pain</option>
            <option value="Muscle Spasms">Muscle Spasms</option>
            <option value="Inflammation">Inflammation</option>
            <option value="Fatigue">Fatigue</option>
            <option value="Hungry">Lack of Appitite</option>
            <option value="Seizures">Seizures</option>
            <option value="Cramps">Cramps</option>
          </Field>
          {touched.Symptom2 && errors.Symptom2 && (
            <p className="error-display"> {errors.Symptom2} </p>
          )}
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation2.slice(11, 16).map(strain => {
            return (
              <RecommendationCard
                key={strain.id}
                sName={strain.name}
                race={strain.race}
                id={strain.id}
              />
            );
          })}
        </RecContainer>
      </SQuestionCont>
      <SButton> Submit Symptoms </SButton>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({
    Symptom1,

    Symptom2,

    Symptom3,

    Symptom4,

    Symptom5
  }) {
    return {
      Symptom1: Symptom1 || "",

      Symptom2: Symptom2 || "",

      Symptom3: Symptom3 || "",

      Symptom4: Symptom4 || "",

      Symptom5: Symptom5 || ""
    };
  },

  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post(apiEndPoint, values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SymptomsForm);
