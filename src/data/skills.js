import Seo from "../assets/images/skills_icons/seo-svgrepo-com.svg";
import WebDev from "../assets/images/skills_icons/web-development-svgrepo-com.svg";
import ReactSvg from "../assets/images/react.svg";
import HtmlCssJS from "../assets/images/skills_icons/html-js-css-icon-style-vector.svg"
import RestfullApi from "../assets/images/skills_icons/api-svgrepo-com.svg"
import NodeJS from "../assets/images/skills_icons/node-fill-svgrepo-com.svg"

export const skills = [
  {
    id: 1,
    // icon: URL(""),
    image: Seo,
    title: "ui & ux design",
    description:
      "UI/UX design focuses on creating effective and enjoyable user experiences for digital products, primarily websites and applications. It encompasses both user interface (UI) design and user experience (UX) design.",
  },
  {
    id: 2,
    // icon: URL(""),
    image: WebDev,
    title: "web development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes several aspects, such as web design, web programming, and database management.",
  },
  {
    id: 3,
    // icon: URL(""),
   image: HtmlCssJS,
    title: "html css javascript",
    description:
      "The bread and butter for any web developer. I consider these three to be the foundational skills essential for building modern websites.",
  },
  {
    id: 4,
    image: ReactSvg,
    // icon: URL(""),
    title: "react library",
    description:
      "As a React developer I specialize in building modern, dynamic web applications using React.js, a popular JS library developed by Facebook. The main focus is on creating reusable UI components and managing the application's state effectively.",
  },
  {
    id: 5,
    // icon: URL(""),
    image: RestfullApi,
    title: "restful api",
    description:
      "As a RESTful API developer designs and implements APIs that enable seamless communication between client and server, ensuring efficient and scalable data exchange in web applications.",
  },
  {
    id: 6,
    // icon: URL(""),
    image: NodeJS,
    title: "node js",
    description:
      "A Node.js developer builds scalable server-side applications using JavaScript, leveraging event-driven architecture and non-blocking I/O for efficient performance.",
  },
];