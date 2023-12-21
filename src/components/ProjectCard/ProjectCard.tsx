import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

import selectIcon from "@/helpers/selectIcon";
import { IProject } from "@/constants/projects";
import Slider from "../Slider/Slider";

const ProjectCard = ({ project }: { project: IProject }) => {
  const {
    title,
    description,
    role,
    technologes = ["HTML", "CSS", "JS", "REACT"],
    img,
    git,
    url,
  } = project;
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-xl">
        <div className="h-48 lg:h-auto lg:w-1/2 lg:flex-shrink-0 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Slider />
        </div>
        {/* <Image src="/assets/hero.jpg" alt="Album" width={300} height={300} /> */}
        <div className="lg:w-1/2 lg:flex-grow border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base  mb-2">{description}</p>
            <p className="text-sm text-gray-600 flex items-center">
              Role:{role}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {technologes.map((item) => (
              <>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-2 items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                  {selectIcon(item)}
                  {item}
                </span>
              </>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`go to ${title} project gitHub `}
            >
              <FaGithub size={20} />
            </Link>
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`go to ${title} project website `}
              >
                <FaLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
