import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { GiRoundShield } from "react-icons/gi";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

const selectIcon = (iconName: string) => {
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
      return <BiLogoRedux />;
      break;
    case "email":
      return <MdEmail />;
      break;
    case "telegram":
      return <FaTelegramPlane />;
      break;
    case "linkedin":
      return <FaLinkedin />;
      break;
    case "github":
      return <FaGithub />;
      break;
    case "phone":
      return <MdPhoneAndroid />;
      break;
    default:
      return <GiRoundShield />;
      break;
  }
};

export default selectIcon;
