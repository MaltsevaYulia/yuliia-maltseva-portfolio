import React from "react";
import ContactMeForm from "@/components/ContactMeForm/ContactMeForm";
import Title from "@/components/Title/Title";

import styles from "./contacts.module.scss"

const Contacts = () => {
  return (
    <>
      <Title>Contacts</Title>
      <div className={styles.contact_box}>
        <div>
          <p>
            Excited about the possibility of collaborating on exciting projects!
            I'm currently looking for opportunities, my inbox is always open
            whether for hiring me or just to talk. Can't wait to connect!
          </p>
          <address>
            <ul>
              <li>
                <a
                  href="https://t.me/MUSjuly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @MUSjuly
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yuliya-maltseva/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="mailto:julyysp@gmail.com">julyysp@gmail.com</a>
              </li>
              <li>
                <a href="tel:+380954157901">+380954157901</a>
              </li>
              <li>
                <a href="tel:+35797612734">+35797612734</a>
              </li>
            </ul>
          </address>
        </div>
        <ContactMeForm />
      </div>
    </>
  );
};

export default Contacts;
