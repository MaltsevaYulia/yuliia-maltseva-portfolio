import AboutInfo from "@/components/AboutInfo/AboutInfo";
import Skills from "@/components/Skills/Skills";
import Title from "@/components/Title/Title";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>About me</Title>
      <AboutInfo />
      <Skills/>
    </div>
  );
};

export default About;
