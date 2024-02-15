import certificates from "@/constants/certificate";
import Image from "next/image";
import React from "react";
import LinkYellow from "../LinkYellow/LinkYellow";
import Title from "../Title/Title";

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Title tag="h2">Certificate</Title>
      <div className="flex flex-wrap items-center justify-center gap-5 my-5  rounded-xl w-fit p-3 md:p-5">
        {certificates.map(({ id, url, name }) => (
          <div className="w-60" key={id}>
            <Image
              src={url}
              alt={`Yuliia Maltseva ${name}`}
              width={345}
              height={345}
              priority={true}
              sizes="(100vw, 100vh)"
              className="border-solid border-gray-500 border rounded-xl  transition duration-300 ease-in-out hover:scale-110 scale-100"
            />
          </div>
        ))}
      </div>
      <LinkYellow
        pass="/assets/Yuliia_Maltseva_Certificate.pdf"
        rel="noreferrer"
        target="_blank"
      >
        Open in PDF
      </LinkYellow>
    </div>
  );
};

export default AdditionalInfo;
