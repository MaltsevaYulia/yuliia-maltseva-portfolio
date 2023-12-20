import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

import selectIcon from "@/helpers/selectIcon";
import { IProject } from "@/constants/projects";

const ProjectCard = ({ project }:{ project: IProject }) => {
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
        <Image src="/assets/hero.jpg" alt="Album" width={300} height={300} />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
            {/* <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p> */}

            <p className="text-gray-700 text-base  mb-2">{description}</p>
            <p className="text-sm text-gray-600 flex items-center">
              Role:{role}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {technologes.map((item) => (
              <>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-2 items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                  {selectIcon(item)}
                  {/* <svg
                    className="w-2.5 h-2.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg> */}
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
