import React from "react";
import Image from "next/image";
import Text from "@/components/Text/Text";

const AboutInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        src={"/assets/my-photo.jpg"}
        width={300}
        height={300}
        alt="about image"
        className="rounded-xl mt-5 hover:grayscale transition duration-300 ease-in-out hover:rotate-6 rotate-0"
        priority
      />
      <Text>
        My name is Yuliia Maltseva. I am a full stack developer. I come with
        experience in website development, utilizing HTML, CSS, and JavaScript,
        Redux Toolkit, with a strong focus on front-end frameworks like React.js
        and Next.js. Additionally, my hands-on experience extends to server-side
        technologies like Node.js, Express and databases as MongoDB, Supabase,
        Rirebase. I have been coding for 1,5 year and during this time I have done
        3 successful team projects and 3 individual ones. As a Scrum Master in
        the last team project, I facilitated daily stand-up meetings and
        presented the project on behalf of the team. Due to this I am good at
        core technical skills, organizational ethics, discipline, and attantion
        to details. I am also a teamplayer and am willing to help out wherever
        needed. My goal is to get a job in a reputed company like yours where I
        can use my skills and knowledge to deliver good results in the long
        term. I am eager to achieve a good position in a future in the company
        to scale up the organization&apos;s production and growth rate and at
        the same time for my personal career growth as well. That&apos;s all
        about me.
      </Text>
    </div>
  );
};

export default AboutInfo;
