import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled, { css } from "styled-components";
import RecommendationCard from "../Recommendations/RecommendationCard";
const apiEndPoint = "";
const ErrorContainer = styled.div`
  color: red;
`;
const SQuestionCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 2%;
  p {
    text-align: left;
    font-weight: bold;
    font-family: "Script MT";
  }
`;
const QCont = styled.div`
  padding: 2% 0;
  display: flex;
  font-family: "Script MT";
  justify-content: space-around;
`;
const RecContainer = styled.div`
  padding: 1%;
  display: flex;
  justify-content: space-around;
  background-color: rgba(34, 139, 34, 0.5);
  border-radius: 10px;
  font-family: "Script MT";
`;

const SButton = styled.button`
  background: forestgreen;
  min-height: 3vh;
  min-width: 8vw;
  border: 1px solid forestgreen;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: "Script MT";
  ${props =>
    props.primary &&
    css`
      background: Purple;
      border: 1px solid Purple;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
      border: 1px solid red;
    `}
`;

const SymptomsForm = ({ values, errors, touched, status }) => {
  const [recommendation, setRecommendation] = useState([]);
  const [recommendation2, setRecommendation2] = useState([]);
  const [symptom2, setSymptom2] = useState();
  const [symptom, setSymptom] = useState();
  const [recommendation3, setRecommendation3] = useState([]);
  const [recommendation4, setRecommendation4] = useState([]);
  const [symptom3, setSymptom3] = useState();
  const [symptom4, setSymptom4] = useState();
  const [symptom5, setSymptom5] = useState();
  const [recommendation5, setRecommendation5] = useState([]);
  useEffect(() => {
    const getRecommendation = () => {
      if (symptom !== null) {
        axios

          .get(
            `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom}`
          )

          .then(response => {
            setRecommendation(response.data);
          })

          .catch(error => {
            console.error("Server Error", error);
          });
      } else {
        return console.log("waiting for a selection!");
      }
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
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation2();
  }, [symptom2]);
  useEffect(() => {
    const getRecommendation3 = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom3}`
        )

        .then(response => {
          setRecommendation3(response.data);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation3();
  }, [symptom3]);
  useEffect(() => {
    const getRecommendation4 = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom4}`
        )

        .then(response => {
          setRecommendation4(response.data);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation4();
  }, [symptom4]);
  useEffect(() => {
    const getRecommendation5 = () => {
      axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/effect/${symptom5}`
        )

        .then(response => {
          setRecommendation5(response.data);
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getRecommendation5();
  }, [symptom5]);
  return (
    <Form>
      <hr></hr>
      <ErrorContainer>
        {touched.Symptom1 && errors.Symptom1 && (
          <p className="error-display">Symptom 1: {errors.Symptom1}</p>
        )}

        {touched.Severity1 && errors.Severity1 && (
          <p className="error-display">
            Symptom 1 Severity: {errors.Severity1}
          </p>
        )}
        {touched.Symptom2 && errors.Symptom2 && (
          <p className="error-display">Symptom 2: {errors.Symptom2}</p>
        )}
        {touched.Severity2 && errors.Severity2 && (
          <p className="error-display">
            Symptom 2 Severity: {errors.Severity2}
          </p>
        )}
        {touched.Symptom3 && errors.Symptom3 && (
          <p className="error-display">Symptom 3: {errors.Symptom3}</p>
        )}
        {touched.Severity3 && errors.Severity3 && (
          <p className="error-display">
            Symptom 3 Severity: {errors.Severity3}
          </p>
        )}
        {touched.Symptom4 && errors.Symptom4 && (
          <p className="error-display">Symptom 4: {errors.Symptom4} </p>
        )}
        {touched.Severity4 && errors.Severity4 && (
          <p className="error-display">
            Symptom 4 Severity: {errors.Severity4}{" "}
          </p>
        )}
        {touched.Symptom5 && errors.Symptom5 && (
          <p className="error-display">Symptom 5: {errors.Symptom5} </p>
        )}
        {touched.Severity5 && errors.Severity5 && (
          <p className="error-display">
            Symptom 1 Severity: {errors.Severity5}{" "}
          </p>
        )}
      </ErrorContainer>
      <SQuestionCont>
        <hr></hr>
        <QCont>
          <label htmlFor="Symptom1">
            <p>Select Symptom 1:</p>
          </label>
          <Field
            as="select"
            className="SymptomField"
            name="Symptom1"
            value={symptom}
            onChange={e => {
              setSymptom(e.target.value);
              console.log(e.target.value);
              console.log({ symptom });
            }}
          >
            <option selected disabled value="">
              Select A Symptom
            </option>
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
          <label htmlFor="Severity1">
            <p>Select Symptom Severity:</p>
          </label>
          <Field as="select" className="SeverityField" name="Severity1">
            <option selected disabled value="">
              Select Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation.slice(0, 5).map(strain => {
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
          <label htmlFor="Symptom2">
            <p>Select Symptom 2:</p>
          </label>
          <Field
            as="select"
            className="SymptomField"
            name="Symptom2"
            value={symptom2}
            onChange={e => {
              setSymptom2(e.target.value);
            }}
          >
            <option selected disabled value="">
              Select A Symptom
            </option>
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

          <label htmlFor="Severity2">
            <p>Select Symptom Severity:</p>
          </label>
          <Field as="select" className="SeverityField" name="Severity2">
            <option selected disabled value="">
              Select Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation2.slice(7, 12).map(strain => {
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
          <label htmlFor="Symptom3">
            <p>Select Symptom 3:</p>
          </label>
          <Field
            as="select"
            className="SymptomField"
            name="Symptom3"
            value={symptom3}
            onChange={e => {
              setSymptom3(e.target.value);
            }}
          >
            <option selected disabled value="">
              Select A Symptom
            </option>
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

          <label htmlFor="Severity3">
            <p>Select Symptom Severity:</p>
          </label>
          <Field as="select" className="SeverityField" name="Severity3">
            <option selected disabled value="">
              Select Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation3.slice(0, 5).map(strain => {
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
          <label htmlFor="Symptom4">
            <p>Select Symptom 4:</p>
          </label>
          <Field
            as="select"
            className="SymptomField"
            name="Symptom4"
            value={symptom4}
            onChange={e => {
              setSymptom4(e.target.value);
            }}
          >
            <option selected disabled value="">
              Select A Symptom
            </option>
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

          <label htmlFor="Severity4">
            <p>Select Symptom Severity:</p>
          </label>
          <Field as="select" className="SeverityField" name="Severity4">
            <option selected disabled value="">
              Select Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation4.slice(5, 10).map(strain => {
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
          <label htmlFor="Symptom5">
            <p>Select Symptom 5:</p>
          </label>
          <Field
            as="select"
            className="SymptomField"
            name="Symptom5"
            value={symptom5}
            onChange={e => {
              setSymptom5(e.target.value);
            }}
          >
            <option selected disabled value="">
              Select A Symptom
            </option>
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
          <label htmlFor="Severity5">
            <p>Select Symptom Severity:</p>
          </label>
          <Field as="select" className="SeverityField" name="Severity5">
            <option selected disabled value="">
              Select Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </QCont>
        <p>Recommendations:</p>
        <RecContainer>
          {recommendation5.slice(10, 15).map(strain => {
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
      <SButton type="submit"> Submit Symptoms </SButton>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({
    Symptom1,
    Severity1,
    Symptom2,
    Severity2,
    Symptom3,
    Severity3,
    Symptom4,
    Severity4,
    Symptom5,
    Severity5
  }) {
    return {
      Symptom1: Symptom1 || "",
      Severity1: Severity1 || "",
      Symptom2: Symptom2 || "",
      Severity2: Severity2 || "",
      Symptom3: Symptom3 || "",
      Severity3: Severity3 || "",
      Symptom4: Symptom4 || "",
      Severity4: Severity4 || "",
      Symptom5: Symptom5 || "",
      Severity5: Severity5 || ""
    };
  },

  validationSchema: Yup.object().shape({
    Symptom1: Yup.string()
      .required("Atleast 2 Symptoms are Required")
      .notOneOf([Yup.ref("Symptom2")], "Please Select Unique Symptom Values"),
    Severity1: Yup.string().required("You must select a Symptom Severity"),
    Symptom2: Yup.string()
      .required("Atleast 2 Symptoms are Required")
      .notOneOf([Yup.ref("Symptom1")], "Please Select Unique Symptom Values"),
    Severity2: Yup.string().required("You must select a Symptom Severity")
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post(apiEndPoint, values)
      .then(response => {
        console.log(values);
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SymptomsForm);
