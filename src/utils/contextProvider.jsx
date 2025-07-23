import { createContext } from "react";
import socialOcto1 from "../assets/img/social_octo1.png";
import socialOcto2 from "../assets/img/social_octo2.png";
import socialOcto3 from "../assets/img/social_octo3.png";
import casatourat1 from "../assets/img/casatourat1.jpg";
import casatourat2 from "../assets/img/casatourat2.jpg";
import lionsgeek1 from "../assets/img/lionsgeek1.png";
import lionsgeek2 from "../assets/img/lionsgeek2.png";
import lionsgeek3 from "../assets/img/lionsgeek3.png";
import casatourat_back1 from "../assets/img/casatourat_back1.png";
import casatourat_back2 from "../assets/img/casatourat_back2.png";
import casatourat_back3 from "../assets/img/casatourat_back3.png";
import yes_africa1 from "../assets/img/yes_africa1.png";
import yes_africa2 from "../assets/img/yes_africa2.png";
import yes1 from "../assets/img/yes1.png";
import yes2 from "../assets/img/yes2.png";
import yes3 from "../assets/img/yes3.png";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const projects = [
    {
      id: "1",
      title: "Casatourat Mobile App",
      subtitle: "Tourism & Travel Mobile Application",
      technologies: [
        "Expo React Native",
        "JavaScript",
        "React Navigation",
        "AsyncStorage",
        "Expo Location",
      ],
      images: [casatourat1, casatourat2],
      description:
        "A mobile application designed for exploring circuits and locations with enhanced user experiences. Delivered a beta version, resolved client feedback issues, and refined the app's functionality.",
      detailedDescription:
        "Casatourat is a comprehensive mobile application that revolutionizes the way users explore tourist circuits and locations. The app provides an intuitive interface for discovering new places, planning trips, and accessing detailed information about various tourist destinations. Built with Expo React Native, it offers cross-platform compatibility and smooth performance.",
      features: [
        "Interactive map integration with location services",
        "Detailed circuit and location information",
        "User-friendly navigation and search functionality",
        "Offline mode for accessing saved content",
        "Multi-language support",
        "User reviews and ratings system",
        "Booking integration for tours and activities",
      ],
      challenges: [
        "Implementing efficient offline data synchronization",
        "Optimizing map performance for large datasets",
        "Creating intuitive UX for complex navigation flows",
        "Handling various device screen sizes and orientations",
      ],
      timeline: "10 months",
      year: "2024",
      status: "Completed",
      category: "Mobile Development",
      liveUrl: "https://casatourat.ma/",
      githubUrl: null,
      role: "Mobile Developer",
    },
    {
      id: "2",
      title: "Casatourat Backend",
      subtitle: "RESTful API & Admin Dashboard",
      technologies: ["Laravel", "PHP", "MySQL", "RESTful API"],
      images: [casatourat_back1, casatourat_back2, casatourat_back3],
      description:
        "Developed a robust backend for the Casatourat mobile app, focusing on API integration, database management, and performance optimization.",
      detailedDescription:
        "A comprehensive backend system built with Laravel that powers the Casatourat mobile application. The system includes a robust API architecture, admin dashboard for content management, and advanced database optimization for handling large amounts of tourism data efficiently.",
      features: [
        "RESTful API with comprehensive endpoints",
        "Admin dashboard for content management",
        "User authentication and authorization system",
        "Database optimization and caching",
        "File upload and media management",
        "Analytics and reporting system",
        "Multi-language content support",
      ],
      challenges: [
        "Designing scalable database architecture",
        "Implementing efficient caching strategies",
        "Creating flexible API endpoints for mobile app",
        "Ensuring data security and user privacy",
      ],
      timeline: "4 months",
      year: "2024",
      status: "Completed",
      category: "Backend Development",
      liveUrl: null,
      githubUrl: null,
      role: "Backend Developer",
    },
    {
      id: "3",
      title: "LionsGeek Website",
      subtitle: "Organization Presentation & Participant Management System",
      technologies: ["Laravel", "Inertia.js", "React", "MySQL", "Tailwind CSS"],
      images: [lionsgeek3, lionsgeek2, lionsgeek1],
      description:
        "Developed the official presentation website for LionsGeek, allowing users to explore the organization's mission and apply for in-person tech and media training programs.",
      detailedDescription:
        "The LionsGeek website serves as a public-facing platform showcasing the organization's vision, programs, and activities. It features a structured participant application system, blog and event management, and a robust admin dashboard for managing sessions, posts, and user registrations. Built with Laravel, Inertia.js, and React, the platform ensures a smooth single-page experience for both users and administrators.",
      features: [
        "Application form for in-person bootcamps and training",
        "Admin panel for managing participants, blogs, and events",
        "Dynamic blog and event section",
        "Newsletter subscription system",
        "Role-based access for admins and moderators",
        "Multilingual interface (Arabic & French)",
        "Fully responsive frontend with custom UI",
      ],
      challenges: [
        "Building a flexible backoffice with scalable CRUD systems",
        "Handling real-time form validation and session limits",
        "Synchronizing content display with admin inputs",
        "Designing a clean and mobile-friendly public interface",
      ],
      timeline: "6 months",
      year: "2024",
      status: "Completed",
      category: "Full-Stack Web Development",
      liveUrl: "https://lionsgeek.ma/",
      githubUrl: null,
      role: "Web Developer",
    },
    {
      id: "4",
      title: "Yes Africa Website",
      subtitle: "Dynamic Corporate Website",
      technologies: [
        "React.js",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "JavaScript",
      ],
      images: [yes_africa1, yes1, yes3, yes_africa2],
      description:
        "Developed and delivered a dynamic website for Yes Africa, focusing on user-friendly interfaces and efficient backend integration. Updated the UI to enhance the user experience.",
      detailedDescription:
        "A modern, responsive website for Yes Africa organization, combining React.js frontend with Laravel backend. The project focused on creating an engaging user experience while maintaining robust backend functionality for content management and user interactions.",
      features: [
        "Responsive and modern design",
        "Content management system",
        "User registration and authentication",
        "Dynamic content rendering",
        "SEO optimization",
        "Contact and inquiry forms",
        "Multi-page navigation with smooth transitions",
      ],
      challenges: [
        "Integrating React frontend with Laravel backend",
        "Optimizing performance for fast loading times",
        "Creating responsive design for all devices",
        "Implementing SEO best practices",
      ],
      timeline: "2 months",
      year: "2023",
      status: "Completed",
      category: "Full Stack Development",
      liveUrl: "https://youthempowermentsummit.africa/",
      githubUrl: null,
      role: "Full Stack Developer",
    },
    {
      id: "5",
      title: "GitHub Profile Insights",
      subtitle: "Developer Analytics Dashboard",
      technologies: [
        "React.js",
        "GitHub API",
        "Chart.js",
        "Tailwind CSS",
        "JavaScript",
      ],
      images: [socialOcto1, socialOcto2, socialOcto3],
      description:
        "An interactive tool that displays GitHub user stats, including repositories, followers, and language usage. Features dynamic charts and detailed repo cards.",
      detailedDescription:
        "A comprehensive analytics dashboard that provides deep insights into GitHub user profiles and repositories. The application fetches data from GitHub API and presents it in an intuitive, visually appealing interface with interactive charts and detailed statistics.",
      features: [
        "Real-time GitHub data fetching",
        "Interactive charts and visualizations",
        "Repository analysis and statistics",
        "Language usage breakdown",
        "Contribution timeline visualization",
        "User profile overview",
        "Responsive design for all devices",
      ],
      challenges: [
        "Handling GitHub API rate limits efficiently",
        "Creating meaningful data visualizations",
        "Optimizing performance for large datasets",
        "Implementing responsive chart layouts",
      ],
      timeline: "1 month",
      year: "2024",
      status: "Completed",
      category: "Frontend Development",
      liveUrl: "https://github-insights-demo.com",
      githubUrl: "https://github.com/username/github-insights",
      role: "Frontend Developer",
    },
  ];

  return (
    <>
      <MyContext.Provider value={{ projects }}>{children}</MyContext.Provider>
    </>
  );
};
