import React from "react";
import ContactMeForm from "@/components/ContactMeForm/ContactMeForm";
import Title from "@/components/Title/Title";

import styles from "./contacts.module.scss";
import Text from "@/components/Text/Text";

const Contacts = () => {
  return (
    <>
      <Title>Contacts</Title>
      <div className={styles.contacts_box}>
        <div className="flex flex-col gap-5">
          <Text>
            Excited about the possibility of collaborating on exciting projects!
            I&apos;m currently looking for opportunities, my inbox is always
            open, whether it&apos;s for hiring me or just to talk. Can&apos;t
            wait to connect! If you need an adaptive, cross-browser website as
            well, feel free to contact me.
          </Text>

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
