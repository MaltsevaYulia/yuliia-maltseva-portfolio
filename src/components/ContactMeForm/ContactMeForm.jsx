"use client";
import React from "react";
import { Form, Formik } from "formik";

import TextField from "@/components/ContactMeForm/Formik/TextField";
import TextareaField from "@/components/ContactMeForm/Formik/TextareaField";
import validationSchema from "@/schemas/validationSchema";

import styles from "./ContactMeForm.module.scss";

const ContactMeForm = () => {
  async function handleSubmit(values, actions) {
    try {
      const response = await fetch("api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        actions.resetForm();
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <TextField label="name" name="name" type="text" placeholder="Name" />
          <TextField
            label="email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <TextareaField
            label="message"
            name="message"
            type="text"
            placeholder="Message"
          />

          <button
            className={styles.form__btn}
            type="submit"
            disabled={isSubmitting}
            arial-label="send message"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactMeForm;
