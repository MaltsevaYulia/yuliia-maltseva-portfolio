"use client";
import React from "react";
import { Form, Formik } from "formik";

import TextField from "@/components/ContactMeForm/Formik/TextField";
import TextareaField from "@/components/ContactMeForm/Formik/TextareaField";
import validationSchema from "@/schemas/validationSchema";

import styles from "./ContactMeForm.module.scss";
import sendMail from "@/helpers/sendMail";

const ContactMeForm = () => {

  const handleSubmit = async (values, actions) => {
    const { name, email, message } = values;
    const formData = {
      to: email,
      name,
      subject: "test",
      body: `<div>${message}</div>`,
    };

    const response = await fetch("api/contact-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      alert("Your inquiry has been submitted!");
    } else if (error) {
      console.error(error);
      alert("Error while submitting your inquiry: ", error);
    }

    // "use server";
    // await sendMail({
    //   to: "muscoprof@gmail.com",
    //   name: "Nala",
    //   subject: "test",
    //   body: <div>Test</div>,
    // });
    // console.log("🚀 ~ handleSubmit ~ values:", values);
    // const { name, email, message } = values;
    // await sendMail({
    //   to: email,
    //   name,
    //   subject: "test",
    //   body: <div>{message}</div>,
    // });
  };

  return (
    // <button className={styles.form__btn} onClick={handleSubmit}>
    //   Test
    // </button>
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
