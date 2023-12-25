import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

import selectIcon from "@/helpers/selectIcon";
import { IProject } from "@/constants/projects";
import Slider from "../Slider/Slider";
import css from "./ProjectCard.module.scss";

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
      <li className={css.card}>
        <div className={css.cardSlider}>
          <Slider images={img} />
        </div>

        <div className={css.card_info}>
          <div className="">
            <h2 className="text-gray-900 font-bold text-xl ">{title}</h2>
            <p className="text-gray-700 text-base ">{description}</p>
            <p className="text-sm text-gray-600 flex items-center">
              Role:{role}
            </p>
          </div>

          <div className={css.tech_box}>
            {technologes.map((item) => (
              <>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-2 items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                  {selectIcon(item)}
                  {item}
                </span>
              </>
            ))}
          </div>
          <ul className={css.link_list}>
            <li>
              <Link
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`go to ${title} project gitHub `}
              >
                <FaGithub size={20}  className={css.icon} />
              </Link>
            </li>
            {url && (
              <li>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`go to ${title} project website `}
                >
                  <FaLink size={20}  className={css.icon} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
