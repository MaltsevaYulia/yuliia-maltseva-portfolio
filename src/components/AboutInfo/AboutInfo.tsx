import React from "react";
import Image from "next/image";
import Text from "@/components/Text/Text";
import LinkYellow from "../LinkYellow/LinkYellow";

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
      <div className="flex flex-col gap-5 justify-between">
        <Text>
          My name is Yuliia Maltseva. I am a full stack developer. I come with
          experience in website development, utilizing HTML, CSS, and
          JavaScript, Redux Toolkit, React-Native, with a strong focus on
          front-end frameworks like React.js and Next.js. Additionally, my
          hands-on experience extends to server-side technologies like Node.js,
          Express and databases as MongoDB, Supabase, Rirebase. My goal is to
          get a job in a reputed company where I can use my skills and knowledge
          to deliver good results in the long term. I have been coding for 1,5
          year and during this time I&apos;ve participated in group projects and
          have developed several individual ones. You can find more details in
          my projects section or by clicking the link below.
        </Text>
        <LinkYellow pass="/projects">Go to Projects</LinkYellow>
      </div>
    </div>
  );
};

export default AboutInfo;
