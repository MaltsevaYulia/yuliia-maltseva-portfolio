import React from 'react'
import ContactMeForm from "@/components/ContactMeForm/ContactMeForm";
import Title from '@/components/Title/Title';


const Contacts = () => {
   return (
    <>
      <Title>Contact me</Title>
      <div>
        <ContactMeForm/>
      </div>
    </>
  );
}

export default Contacts