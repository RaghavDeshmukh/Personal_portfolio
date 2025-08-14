// import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `A passionate Web Developer with expertise in Node.js, React.js, and MongoDB, I thrive on turning innovative ideas into impactful web solutions. From building dynamic front-end interfaces to architecting robust back-end systems, I specialize in creating intuitive, scalable, and user-focused applications.

Driven by curiosity and a commitment to continuous learning, I've honed my skills through projects like employee management systems, API integrations, and real-time applications. Ready to tackle new challenges and bring value to your team, I aim to deliver code that connects, inspires, and performs.`;

export const ABOUT_TEXT = `I am Raghav Deshmukh, a passionate Web Developer currently pursuing my Master’s in Computer Science from Savitribai Phule Pune University (SPPU), where I also completed my Bachelor’s in Computer Science. My academic journey has provided me with a strong foundation in computer science principles and hands-on experience with cutting-edge technologies.

With expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I am equally proficient in MySQL, Java, and Next.js. I thrive on designing and developing scalable, efficient, and user-friendly web applications that meet modern standards.

When I’m not coding, I enjoy hitting the badminton court, a sport that keeps me energized and sharp—both mentally and physically. I believe in balancing technical pursuits with personal interests, which fuels my creativity and problem-solving abilities.

I’m always excited to tackle new challenges and build solutions that make a difference.`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    degree: "Master's in Computer Science (Msc-CS)",
    University: "Savitribai Phule Pune University (SPPU)",
    description: `F.Y S.G.P.A : 7.52 & 7.41`,
  },
  {
    year: "2020 - 2023",
    degree: "Bachelor's in Computer Science (Bsc-CS)",
    University: "Savitribai Phule Pune University (SPPU)",
    description: `Final C.G.P.A : 8.97`,
  },
  {
    year: "2019 - 2020",
    degree: "12th(Science)(HSC)",
    University: "Ankushrao Tope College, Jalna",
    description: `Percentage: 65.69%`,
  },
  {
    year: "2017 - 2018",
    degree: "10th(SSC)",
    University: "Deogiri English School, Jalna",
    description: `Percentage: 84.80%`,
  },
];

export const PROJECTS = [
  // {
  //   title: "Chat Application",
  //   image: project1,
  //   description:
  //     "A Fullstack Chat Application which lets users to send and receive messages in real time",
  //   technologies: ["MongoDB", "ExpressJS", "ReactJS", "Node.js", "TailwindCSS","SocketIO","JWT"],
  //   projectlink: "https://github.com/RaghavDeshmukh/chatapp"
  // },
  {
     title: "Code Editor",
     image: project5,
     description:
       "A web-based code editor built with React.js, featuring real-time code editing and instant preview. Designed for seamless user experience, it allows writing, editing, and running code directly in the browser without additional setup.",
     technologies: ["ReactJS","Monaco Editor","Piston API"],
     projectlink: "https://github.com/RaghavDeshmukh/react-code-editor",
     livelink:"https://codeeditor-rust.vercel.app/"
  },
  {
    title: "Courses Selling App",
    image: project2,
    description:
      "A Course Selling Web App which lets users to view and purchase courses. Project Contains Users who can can view and buy Courses from the app using the Stripe Payment Gateway, and  admin who can create and delete these Courses",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "Node.js", "TailwindCSS","Zod","JWT"],
    projectlink: "https://github.com/RaghavDeshmukh/courseapp",
    livelink:"https://codeeditor-rust.vercel.app/"
  },
  {
    title: "Word to PDF Converter",
    image: project3,
    description:
      "A Simple Word Document to PDf Document Converter made using Node.js that lets users to covert Word files (.docx, .doc) into the PDF format",
    technologies: ["ExpressJS", "ReactJS", "Node.js", "Multer"],
    projectlink: "https://github.com/RaghavDeshmukh/Wordtopdf",
    livelink:"https://codeeditor-rust.vercel.app/"
  },
  {
    title: "Random Password Generator",
    image: project4,
    description:
      "A Simple and easy to use Random Password Generator which lets anyone to generate highly secure random password including numbers and special characters",
    technologies: ["ReactJs", "TailwindCSS"],
    projectlink: "https://github.com/RaghavDeshmukh/RandomPasswordGenerator",
    livelink:"https://codeeditor-rust.vercel.app/"
  },
];

export const CONTACT = {
  address: "Katepuram Chowk, New Sangvi, PCMC(Pune)",
  phoneNo: "+91 8600676924 ",
  email: "deshmukhraghav17@gmail.com",
};
