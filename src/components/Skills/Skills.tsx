import Image from "next/image";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import { skills } from "@/constants/skills";
import Title from "../Title/Title";
import LinkYellow from "../LinkYellow/LinkYellow";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Title tag="h2">My Skills</Title>
      <div className="flex flex-wrap items-center justify-center gap-5 my-5 bg-gray-300 rounded-xl w-fit p-3 md:p-5">
        {skills.map((skill, i) => (
          <div className="w-12" key={i}>
            <Image
              src={`/skills/${skill.icon}.svg`}
              alt={skill.name}
              width={48}
              height={48}
              className={`inline-block hover:animate-wiggle ${
                i === 3 ? "mt-3" : ""
              }`}
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center md:justify-start">
        <LinkYellow
          pass={"/assets/Yuliia_Maltseva_Front_End_Developer.pdf"}
          rel="noreferrer"
          target="_blank"
        >
          Read more
        </LinkYellow>
      </div>
    </div>
  );
};

export default Skills;
