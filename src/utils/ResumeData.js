import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import SharePoint1 from "../assets/images/sharpointProject1.jpg";
import TrichyNoAuto from "../assets/images/TrichyNo1Auto.jpeg";

export default {
  name: "MURALI.R",
  title: "React Developer",

  birthday: "17th december 2001",
  email: "muraliraman728@gmail.com",
  phone: "8056439365",
  address: "Namakkal,Tamil Nadu",

  socials: {
    linkedin: {
      link: "https://www.linkedin.com/in/muraliram728/",
      text: "Linkedin",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/muraliram728/my-repo",
      text: "Github",
      icon: <GitHubIcon />,
    },
  },

  about:
    "I am a SharePoint and Power Automate Developer with expertise in the SharePoint Framework (SPFx) and RESTful APIs, creating custom web parts and automating business processes. I also have experience optimizing Power Automate flows for tasks such as list retrieval, folder creation, and workflow management.\n\n In addition to my SharePoint and Power Automate skills, I am proficient in the MERN stack (MongoDB, Express.js, React, Node.js) and am actively seeking opportunities in web development to apply my skills in a broader context. \n\n Let’s connect if you’re looking for a versatile developer with a strong foundation in both SharePoint solutions and modern web technologies.",

  Experiences: [
    {
      companyName: "TechnomaX Systems",
      title: "SharePoint Developer & Power Automate Specialist",
      date: "Aug 2023 - Present",
      description:
        "Designed and deployed custom web parts using SharePoint Framework (SPFx), utilizing RESTful APIs to integrate and display list and library items. \n\n Developed Power Automate workflows to automate business processes, enhancing efficiency and user experience across platforms.",
    },
  ],

  Educations: [
    {
      degree: "Bachelor of Engineering (B.E.) - Automobile Engineering",
      institution: "KSR College of Engineering, Tiruchengode",
      completionDate: "2023",
    },
  ],

  Skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJs",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "SHARE POINT",
      description: ["SPFx Framework", "REST API", "PnPjs"],
    },
    {
      title: "POWER PLATFORM",
      description: ["Power Automate"],
    },
    {
      title: "SOURCE-CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tag: "React",
      title: "Trichy No.1 Auto",
      image: TrichyNoAuto,
      caption: "Trichy No.1 Auto – Trip Tracking System (React + Firebase)",
      description:
        "Built a trip tracking system with dynamic fare calculation based on distance. Integrated admin-only price management, authentication, and a responsive design for seamless access across devices.",
      link: [
        {
          link: "https://github.com/muraliram728/Trichyno1Auto",
          icon: <GitHubIcon />,
        },
        { link: "https://www.trichyno1auto.com/", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Sharepoint",
      title: "Sharepoint(SPFx) project 2",
      image: SharePoint1,
      caption: "Adds a custom ECB (Edit Control Block)",
      description:
        "This project demonstrates how to create a SharePoint Framework (SPFx) extension that adds a custom ECB (Edit Control Block) menu item",
      link: [
        {
          link: "https://github.com/muraliram728/SPFx-ECB-menu-item",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "PowerPlatform",
      title: "PowerAutomate",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.VZtNZ5G8JY0m6DpKr-qooAHaEK&pid=Api&P=0&h=180",
      caption: "SharePoint to manage approval workflows efficiently.",
      description:
        "This project demonstrates an automated approval process using Microsoft Power Automate. The flow is designed to manage multiple approval levels and dynamically notify approvers via Outlook email. It integrates with SharePoint to manage approval workflows efficiently.",
      link: [
        {
          link: "https://github.com/muraliram728/Power-Automate",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/muraliram728/Power-Automate",
          icon: <LanguageIcon />,
        },
      ],
    },
  ],
};
