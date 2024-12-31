import React, { createContext, useState } from "react";
import socialOcto1 from "../assets/img/social_octo1.png";
import socialOcto2 from "../assets/img/social_octo2.png";
import socialOcto3 from "../assets/img/social_octo3.png";
import casatourat1 from "../assets/img/casatourat1.jpg";
import casatourat2 from "../assets/img/casatourat2.jpg";
import casatourat3 from "../assets/img/casatourat3.jpg";
import casatourat4 from "../assets/img/casatourat4.jpg";
import casatourat5 from "../assets/img/casatourat5.jpg";
import casatourat6 from "../assets/img/casatourat6.jpg";
import casatourat7 from "../assets/img/casatourat7.jpg";
import lionsgeek_backoffice from "../assets/img/lionsgeek_backoffice.png";
import casatourat_back1 from "../assets/img/casatourat_back1.png"
import casatourat_back2 from "../assets/img/casatourat_back2.png"
import casatourat_back3 from "../assets/img/casatourat_back3.png"
import yes_africa1 from "../assets/img/yes_africa1.png";
import yes_africa2 from "../assets/img/yes_africa2.png";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [test, setTest] = useState("Hello Test");
  const projects = [
    {
      title: "Casatourat Mobile App",
      technologies: ["Expo React Native"],
      images: [
        casatourat1,
        casatourat2,
        casatourat3,
        casatourat4,
        casatourat5,
        casatourat5,
        casatourat6,
        casatourat7,
      ],
      description:
        "A mobile application designed for exploring circuits and locations with enhanced user experiences. Delivered a beta version, resolved client feedback issues, and refined the app's functionality.",
    },
    {
      title: "Casatourat Backend",
      technologies: ["Laravel"],
      images: [casatourat_back1, casatourat_back2, casatourat_back3],
      description:
        "Developed a robust backend for the Casatourat mobile app, focusing on API integration, database management, and performance optimization.",
    },
    {
      title: "LionsGeek Backend",
      technologies: ["Laravel", "PHP"],
      images: [lionsgeek_backoffice],
      description:
        "Built the backend for LionsGeek's main website, ensuring seamless functionality and integration with various features to support the organization's goals.",
    },
    {
      title: "Yes Africa Website",
      technologies: ["React.js", "Laravel"],
      images: [yes_africa1, yes_africa2],
      description:
        "Developed and delivered a dynamic website for Yes Africa, focusing on user-friendly interfaces and efficient backend integration. Updated the UI to enhance the user experience.",
    },
    {
      title: "GitHub Profile Insights",
      technologies: ["React.js", "GitHub API"],
      images: [socialOcto1, socialOcto2, socialOcto3],
      description:
        "An interactive tool that displays GitHub user stats, including repositories, followers, and language usage. Features dynamic charts and detailed repo cards.",
    },
  ];

  return (
    <>
      <MyContext.Provider value={{ test, setTest, projects }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
