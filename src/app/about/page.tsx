import AboutInfo from "@/components/AboutInfo/AboutInfo";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import Skills from "@/components/Skills/Skills";
import Title from "@/components/Title/Title";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>About me</Title>
      <AboutInfo />
      <Skills />
      <AdditionalInfo/>
    </div>
  );
};

export default About;
