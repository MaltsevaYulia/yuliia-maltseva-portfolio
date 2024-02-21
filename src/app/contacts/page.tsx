import React from "react";
import ContactMeForm from "@/components/ContactMeForm/ContactMeForm";
import Title from "@/components/Title/Title";

import styles from "./contacts.module.scss";
import Text from "@/components/Text/Text";
import ContactsList from "@/components/ContactsList/ContactsList";

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
          <ContactsList />
        </div>
        <ContactMeForm />
      </div>
    </>
  );
};

export default Contacts;
