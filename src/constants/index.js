import React from "react";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Academic Journey",
    title: "Academic Journey",
  },
  {
    id: "Projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Reactjs",
    icon: reactjs,
  },
  {
    title: "Nodejs",
    icon: nodejs,
  },
  {
    title: "Mongodb",
    icon: mongodb,
  },
  {
    title: "Blockchain",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Academic Foundations:",
    company_name: "Exploring Development ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2020 - April 2021",
    points: [
      "In 2020, I began my B.Tech in Computer Science at Rashtrakavi Ramdhari Singh Dinkar College of Engineering. During this initial year, I focused on building a solid foundation in programming languages such as java, c, c++, alongside learning the basics of web development, including HTML, CSS, and JavaScript. This period laid the groundwork for my future technical endeavors.",
    ],
  },
  {
    title: "Mern Stack Development",
    company_name: "Proficiency in full stack development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2021 - Feb 2022",
    points: [
      "In the year 2022 marked a period of specialized learning. I undertook advanced coursework in Digital Image Processing, Wireless Communication Technology, and Data Warehousing and Business Analysis. These studies included image enhancement techniques, wireless network configurations, and data warehouse architecture. My hands-on experience was further enriched by an internship, where I applied my academic knowledge to real-world projects. Additionally, I explored data mining extensively, gaining expertise in data preprocessing, cleaning, classification, and clustering.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodeSoft",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "DIn 2023, I advanced my practical experience and professional development through two key internships—one in MERN stack development, focusing on full-stack web applications, gaining hands-on experience in mern stack aplications. I also completed several advanced courses and earned certifications from NPTEL, Salesforce, Cisco CCNA, and Cybersecurity. These achievements deepened my technical skills and enhanced my soft skills, preparing me for diverse challenges in the tech industry.",
    ],
  },
  {
    title: "Blockchain Development",
    company_name: "SwasthyaChain",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "In 2024, I completed two major projects: Swasthychain, a blockchain-based Electronic Health Record (EHR) system, and Vidyodaya, an Indian-origin edtech platform. Through these projects, I developed strong interpersonal and intrapersonal skills. Additionally, I worked on DevOps practices, focusing on tools and technologies such as Docker, Postman, and CI/CD pipeline system design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His technical skills in blockchain development and React.js were pivotal. His innovative approach and teamwork made him an invaluable asset",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His technical skills  were outstanding. His innovative approach and teamwork significantly contributed to the project's success.",
    name: "Chris Brown",
    designation: "COO",
    company: "CodeSoft",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Prince dedication and technical acumen were pivotal. His ability to tackle complex challenges made him an invaluable team member.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "ContechHub",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SwasthyaChain",
    description:
      "SwasthyaChain is an EHR system using React.js for the frontend and Solidity for blockchain-based secure storage. It integrates MetaMask and Truffle, addressing integration challenges through refined API communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "IPFS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "yellow-text-gradient",
      },
     
    ],
    image: carrent,
    source_code_link: "https://github.com/shrivastava-26/SwasthyaChain",
  },
  {
    name: "VidyoDaya",
    description:
      "Vidyodaya is an edtech platform offering interactive content, adaptive learning, and community features. It enhances educational engagement tutorials focusing on personalized and collaborative learning experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
       {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://vidyodayam.vercel.app",
  },
  {
    name: "Swasthika",
    description:
      "Swasthika is Electronic Medical Records (EMR) Project digitizes patient data using MERN Stack. It provides customizable healthcare management modules and tackles challenges in data security and scalability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
       {
        name: "Mysql",
        color: "Red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shrivastava-26/Swasthika",
  },
];

export { services, technologies, experiences, testimonials, projects };
