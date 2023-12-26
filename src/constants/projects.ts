import { nanoid } from "nanoid";

export interface IImage {
  id: string;
  src: string;
  alt: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  role: string;
  technologes: string[];
  img: IImage[];
  git: string;
  url: string;
}

const projects: IProject[] = [
  {
    id: nanoid(),
    title: "ECOSOLUTION",
    description:
      "Landing page Ecosolution with a responsive layout. Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass.Main features: Fixed header that changes color when scrolling, smooth scrolling, slider, automatic counter, accordion.",
    role: "Developer",
    technologes: ["HTML", "CSS", "JS", "REACT"],
    img: [
      {id: nanoid(),
        src: "/assets/projects/Your-pet1.jpg",
        alt: "finde your favorite page",
      },
      {id: nanoid(), src: "/assets/projects/Your-pet2.jpg", alt: "pet card info" },
      {id: nanoid(), src: "/assets/projects/Your-pet3.jpg", alt: "user profile page" },
      {id: nanoid(), src: "/assets/projects/Your-pet4.jpg", alt: "add pet form step 1" },
      {id: nanoid(), src: "/assets/projects/Your-pet5.jpg", alt: "add pet form step 1" },
    ],
    git: "https://github.com/MaltsevaYulia/test-SoftRyzen",
    url: "https://maltsevayulia.github.io/test-SoftRyzen/",
  },
  {
    id: nanoid(),
    title: "YOUR PET",
    description:
      "A website with a responsive layout. Find a pet by searching in different categories, see the detailed information about the pet. Search for news related to animals. Read about the site's partners and their contact information. Register to be able to add and remove your ads, add animals to favorites. Verify your email. View and edit your profile, add your pets. Use the website on different devices.",
    role: "Developer,scrum master",
    technologes: ["HTML", "CSS", "JS", "REACT", "REDUX", "REST API", "WebPack"],
    img: [
      {id: nanoid(),
        src: "/assets/projects/Your-pet1.jpg",
        alt: "finde your favorite page",
      },
      {id: nanoid(), src: "/assets/projects/Your-pet2.jpg", alt: "pet card info" },
      {id: nanoid(), src: "/assets/projects/Your-pet3.jpg", alt: "user profile page" },
      {id: nanoid(), src: "/assets/projects/Your-pet4.jpg", alt: "add pet form step 1" },
      {id: nanoid(), src: "/assets/projects/Your-pet5.jpg", alt: "add pet form step 1" },
    ],
    git: "https://github.com/TanitaL/team-project-2",
    url: "https://tanital.github.io/team-project-2/",
  },

  {
    id: nanoid(),
    title: "NEWS WEBSITE",
    description:
      "A news site where you can read popular news, news by category, and search for news bykeyword. Readed news are saved on the read page. It is also possible to add/remove favorite new andview them on the Favorites page. Deploy project on Parcel.",
    role: "Developer",
    technologes: ["HTML", "SASS", "JS", "REST API", "AJAX", "Parcel"],
    img: [
      {id: nanoid(),
        src: "/assets/projects/Your-pet1.jpg",
        alt: "finde your favorite page",
      },
      {id: nanoid(), src: "/assets/projects/Your-pet2.jpg", alt: "pet card info" },
      {id: nanoid(), src: "/assets/projects/Your-pet3.jpg", alt: "user profile page" },
      {id: nanoid(), src: "/assets/projects/Your-pet4.jpg", alt: "add pet form step 1" },
      {id: nanoid(), src: "/assets/projects/Your-pet5.jpg", alt: "add pet form step 1" },
    ],
    git: "https://github.com/IvanTolmachev/NewsProjectN",
    url: "https://ivantolmachev.github.io/NewsProjectN/",
  },
  {
    id: nanoid(),
    title: "REACT-NATIVE APP",
    description:
      "This is a mobile app that allows users to navigate through different screens based on theirauthentication status. The app demonstrates the use of React Navigation for implementing navigationflows and Redux for managing application state.Users can view a list of posts, including informationsuch as post images, names, number of comments, and number of likes. They can also view commentsfor specific posts and add their own comments and view on the map the location where the photo wastaken.",
    role: "Developer",
    technologes: ["REACT - NATIVE", "FIREBASE", "REDUX"],
    img: [
      {id: nanoid(),
        src: "/assets/projects/Your-pet1.jpg",
        alt: "finde your favorite page",
      },
      {id: nanoid(), src: "/assets/projects/Your-pet2.jpg", alt: "pet card info" },
      {id: nanoid(), src: "/assets/projects/Your-pet3.jpg", alt: "user profile page" },
      {id: nanoid(), src: "/assets/projects/Your-pet4.jpg", alt: "add pet form step 1" },
      {id: nanoid(), src: "/assets/projects/Your-pet5.jpg", alt: "add pet form step 1" },
    ],
    git: "https://github.com/MaltsevaYulia/react-native-hw-02",
    url: "",
  },
  {
    id: nanoid(),
    title: "WEBSTUDIO",
    description: "My first project after the course HTML, CSS",
    role: "Developer",
    technologes: ["HTML", "SASS", "JS"],
    img: [
      {id: nanoid(),
        src: "/assets/projects/Your-pet1.jpg",
        alt: "finde your favorite page",
      },
      {id: nanoid(), src: "/assets/projects/Your-pet2.jpg", alt: "pet card info" },
      {id: nanoid(), src: "/assets/projects/Your-pet3.jpg", alt: "user profile page" },
      {id: nanoid(), src: "/assets/projects/Your-pet4.jpg", alt: "add pet form step 1" },
      {id: nanoid(), src: "/assets/projects/Your-pet5.jpg", alt: "add pet form step 1" },
    ],
    git: "https://github.com/MaltsevaYulia/goit-markup-hw-08",
    url: "https://maltsevayulia.github.io/goit-markup-hw-08/",
  },
];

export default projects;
