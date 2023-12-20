import React from "react";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { GiRoundShield } from "react-icons/gi";

const selectIcon = (iconName:string) => {
  switch (iconName) {
    case "HTML":
     return <FaHtml5 />;
      break;
    case "CSS":
     return <FaCss3 />;
      break;
    case "SASS":
    return <FaSass />;
      break;
    case "JS":
    return <RiJavascriptFill />;
      break;
    case "REACT":
     return <FaReact />;
      break;
    case "REDUX":
    return  <BiLogoRedux />;
      break;
    default:
     return <GiRoundShield/>
      break;
  }
};

export default selectIcon;
