import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled, { css } from "styled-components";
const apiEndPoint = "";
const SQuestionCont = styled.section`
  display: flex;
  padding: 2% 10%;
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

const sAcuity = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const SymptomsForm = ({ values, errors, touched, status }) => {
  const [Symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    status && setSymptoms(Symptoms => [...Symptoms, status]);
  }, [status]);

  return (
    <Form>
      <SQuestionCont>
        <p> Symptom 1: </p>{" "}
        <Field as="select" name="Symptom1">
          <option value="">Select A Symptom</option>
          <option value="Depression">Depression</option>
          <option value="Stress">Stress</option>
          <option value="Insomnia">Insomnia</option>
          <option value="Pain">Pain</option>
          <option value="Muscle Spasms">Muscle Spasms</option>
          <option value="Lack of Appetite">Lack of Appetite</option>
        </Field>
        {touched.Symptom1 && errors.Symptom1 && (
          <p className="error-display"> {errors.Symptom1} </p>
        )}{" "}
        <p> Symptom Severity </p>{" "}
        <Field
          as="select"
          name="S1Acutiy"
          placeholder="Select Acuity of symptom"
        >
          <option value="1"> 1 </option>{" "}
        </Field>{" "}
        {touched.S1Acuity && errors.S1Acuity && (
          <p className="error-display"> {errors.S1Acuity} </p>
        )}{" "}
      </SQuestionCont>{" "}
      <SQuestionCont>
        <p> Symptom 2: </p>{" "}
        <Field as="select" name="Symptom2" placeholder="Symptom 2">
          <option value="">Select A Symptom</option>
          <option value="Depression">Depression</option>
          <option value="Stress">Stress</option>
          <option value="Insomnia">Insomnia</option>
          <option value="Pain">Pain</option>
          <option value="Muscle Spasms">Muscle Spasms</option>
          <option value="Lack of Appetite">Lack of Appetite</option>
        </Field>{" "}
        {touched.Symptom2 && errors.Symptom2 && (
          <p className="error-display"> {errors.Symptom1} </p>
        )}{" "}
        <p> Symptom Severity </p>{" "}
        <Field
          as="select"
          name="S2Acutiy"
          placeholder="Select Acuity of symptom"
        >
          <option value={sAcuity}> </option>{" "}
        </Field>{" "}
        {touched.S2Acuity && errors.S2Acuity && (
          <p className="error-display"> {errors.S1Acuity} </p>
        )}{" "}
      </SQuestionCont>{" "}
      <SQuestionCont>
        <p> Symptom 3: </p>{" "}
        <Field as="select" name="Symptom3" placeholder="Symptom 3">
          <option value="">Select A Symptom</option>
          <option value="Depression">Depression</option>
          <option value="Stress">Stress</option>
          <option value="Insomnia">Insomnia</option>
          <option value="Pain">Pain</option>
          <option value="Muscle Spasms">Muscle Spasms</option>
          <option value="Lack of Appetite">Lack of Appetite</option>
        </Field>{" "}
        {touched.Symptom3 && errors.Symptom3 && (
          <p className="error-display"> {errors.Symptom3} </p>
        )}{" "}
        <p> Symptom Severity </p>{" "}
        <Field
          as="select"
          name="S3Acutiy"
          placeholder="Select Acuity of symptom"
        >
          <option value={sAcuity}> </option>{" "}
        </Field>{" "}
        {touched.S3Acuity && errors.S3Acuity && (
          <p className="error-display"> {errors.S3Acuity} </p>
        )}{" "}
      </SQuestionCont>{" "}
      <SQuestionCont>
        <p> Symptom 4: </p>{" "}
        <Field as="select" name="Symptom4" placeholder="Symptom 4">
          <option value="">Select A Symptom</option>
          <option value="Depression">Depression</option>
          <option value="Stress">Stress</option>
          <option value="Insomnia">Insomnia</option>
          <option value="Pain">Pain</option>
          <option value="Muscle Spasms">Muscle Spasms</option>
          <option value="Lack of Appetite">Lack of Appetite</option>
        </Field>{" "}
        {touched.Symptom4 && errors.Symptom4 && (
          <p className="error-display"> {errors.Symptom4} </p>
        )}{" "}
        <p> Symptom Severity </p>{" "}
        <Field
          as="select"
          name="S4Acutiy"
          placeholder="Select Acuity of symptom"
        >
          <option value={sAcuity}> </option>
        </Field>
        {touched.S4Acuity && errors.S4Acuity && (
          <p className="error-display"> {errors.S4Acuity} </p>
        )}
      </SQuestionCont>
      <SQuestionCont>
        <p> Symptom 5: </p>
        <Field as="select" name="Symptom5" placeholder="Symptom 5">
          <option value="">Select A Symptom</option>
          <option value="Depression">Depression</option>
          <option value="Stress">Stress</option>
          <option value="Insomnia">Insomnia</option>
          <option value="Pain">Pain</option>
          <option value="Muscle Spasms">Muscle Spasms</option>
          <option value="Lack of Appetite">Lack of Appetite</option>
        </Field>
        {touched.Symptom5 && errors.Symptom5 && (
          <p className="error-display"> {errors.Symptom5} </p>
        )}
        <p> Symptom Severity </p>
        <Field
          as="select"
          name="S5Acutiy"
          placeholder="Select Acuity of symptom"
        >
          <option value={sAcuity}> </option>
        </Field>
        {touched.S5Acuity && errors.S5Acuity && (
          <p className="error-display"> {errors.S5Acuity} </p>
        )}
      </SQuestionCont>
      <SButton> Submit Symptoms </SButton>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({
    Symptom1,
    S1Acuity,
    Symptom2,
    S2Acuity,
    Symptom3,
    S3Acuity,
    Symptom4,
    S4Acuity,
    Symptom5,
    S5Acuity
  }) {
    return {
      Symptom1: Symptom1 || "",
      S1Acuity: S1Acuity || " ",
      Symptom2: Symptom2 || "",
      S2Acuity: S2Acuity || " ",
      Symptom3: Symptom3 || "",
      S3Acuity: S3Acuity || " ",
      Symptom4: Symptom4 || "",
      S4Acuity: S4Acuity || " ",
      Symptom5: Symptom5 || "",
      S5Acuity: S5Acuity || " "
    };
  },
  validationSchema: Yup.object().shape({
    Symptom1: Yup.string().required("Atleast 1 Symptom is REQUIRED"),
    S2Acuity: Yup.string().required("Acuity of Symptom is REQUIRED")
  }),
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
