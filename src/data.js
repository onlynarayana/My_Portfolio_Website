import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMail,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import img1 from "./images/groot store.png";
import img2 from "./images/the game.png";
import img3 from "./images/sanskrit.png";
import img4 from "./images/stark.png";
import img5 from "./images/live code editor.png";
import img6 from "./images/jaipur.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Geeks2Connect",
    location: "Sitapura, Jaipur (Rajasthan)",
    description:
      "React.Js, Next.Js, Redux, JavaScript, TypeScript, MERN-Stack, DSA, Java, Client collaboration and Comunication",
  },
  {
    id: 2,
    date: "2022 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Newton School",
    location: "Full-Stack Bootcamp, remote",
    description:
      "Full-Stack Developer, MERN-Stack, DSA, Java, Projects work, Comunication",
  },
  {
    id: 3,
    date: "2021 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Software Engineer(Intern)",
    location: "IAL, Chandigarh",
    description:
      "Associate Software Engineer, Java, HTML/CSS, Testing, SQC handling, Team Leading",
  },
  {
    id: 4,
    date: "2020 - 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Graduate Engineer Trainee (GET)",
    location: "Nahar Enterprises Pvt. Ltd.",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Work",
  },
  {
    id: 5,
    date: "2019",
    iconsSrc: <IoCodeWorking />,
    title: "Internship",
    location: "BSL Ltd. Bhilwara (Raj.)",
    description:
      "Machine Learning, Production, Management, Project Work, Team Leading",
  },
  {
    id: 6,
    date: "2016 - 2020",
    iconsSrc: <IoCodeWorking />,
    title: "Bechelor Of Technology (TT)",
    location: "M. L. V. Textile and Engineering Collge, Bhilwara (Raj.)",
    description:
      "Management Secretary (MLVTEC), Treasurer (Textile Engineers Socity), Coordinator(workshops and Conferences), Projects, Leadership, Team Building",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Groot Store (Full-Stack) UI ",
    imageSrc: img1,
    link: "https://groot-store.netlify.app",
    techs: "React Js, Redux, Tailwind CSS, Firebase, Framer Motion",
    github: "https://github.com/onlynarayana/Groot_Store.git",
  },
  {
    id: 2,
    name: "Web+Mobile Touch Screen Game",
    imageSrc: img2,
    link: "https://go-snake-go.netlify.app",
    techs: "JAVA, Java Script, HTML and CSS",
    github:
      "https://github.com/onlynarayana/JavaScript-Mini-Project---JS-Mini-Project---3tiv5v021ksf.git",
  },
  {
    id: 3,
    name: "Sanskrit Language Learning",
    imageSrc: img3,
    link: "https://sanskrit-learning-web.netlify.app",
    techs: "HTML and CSS, Java Script",
    github: "https://github.com/onlynarayana/Sanskritam.git",
  },
  {
    id: 4,
    name: "Stark Industries Website",
    imageSrc: img4,
    link: "https://stark-industries-in.netlify.app",
    techs: "HTML and CSS",
    github: "https://github.com/onlynarayana/Stark-Industries.git",
  },
  {
    id: 5,
    name: "Live Code Editor",
    imageSrc: img5,
    link: "https://online-code-editor-by-narayana.netlify.app",
    techs: "React Js, HTML, CSS, Java Script",
    github:
      "https://github.com/onlynarayana/Online-Code-Editor-using-React---React-Project---8kta4enuq9wc.git",
  },
  {
    id: 6,
    name: "Jaipur Parallax Website",
    imageSrc: img6,
    link: "https://beautiful-jaipur-parallax-website.netlify.app",
    techs: "HTML, CSS",
    github:
      "https://github.com/onlynarayana/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---9bff5f7p46qh.git",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/narayan-mali007/",
  },
  {
    id: 2,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/onlynarayana",
  },
  {
    id: 3,
    iconSrc: <IoMail className="text-yellow-400 text-3xl cursor-pointer" />,
    name: "Mail to",
    link: "mailto:iamnarayan007@gmail.com",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/Narayan36462760",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoInstagram className="text-red-500 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/im_abstracter/",
  },
  {
    id: 6,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/+918955447044",
  },
  {
    id: 7,
    iconSrc: (
      <IoPhonePortraitOutline className="text-pink-300 text-3xl cursor-pointer" />
    ),
    name: "Call me",
    link: "https://www.sejda.com/call/%2B918955447044",
  },
];
