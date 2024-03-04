import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText.jsx";
import {loginValidationShema} from '../validationShemas/login.js'
const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

/**validacion de formik un poco nativa 1 de las formar de validar */
/*const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors
};
export default function LogInPag() {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="E-mail" name={"email"} />
            <FormikInputValue
              placeholder="Password"
              name={"password"}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="LogIn" />
          </View>
        );
      }}
    </Formik>
  );
}*/

export default function LogInPag() {
    return (
      <Formik
        validationSchema={loginValidationShema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
              <FormikInputValue placeholder="E-mail" name={"email"} />
              <FormikInputValue
                placeholder="Password"
                name={"password"}
                secureTextEntry
              />
              <Button onPress={handleSubmit} title="LogIn" />
            </View>
          );
        }}
      </Formik>
    );
  }
