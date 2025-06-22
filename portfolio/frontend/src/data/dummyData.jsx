import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, GitHub, Twitter, Instagram,LinkedIn,BuildRounded,StorageRounded,WifiRounded } from "@mui/icons-material"

export const navlinks = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "About",
        url: "/about"
    },
    {
        text: "Service",
        url: "/service"
    },
    {
        text: "Testimonials",
        url: "/testimonials"
    },
    {
        text: "Projects",
        url: "/projects"
    },
    {
        text: "Contact",
        url: "/contact"
    }
]

export const home = [
    {
        text: "HELLO I'M",
        name: "MEEKAIL ASLAM",
        post: "FRONT-END DEVELOPER",
        design: "BACK-END DEVELOPER",
        desc: " I'm passionate about JavaScript and currently diving deep into the MERN stack. Learning Nest.js and React.js to level up my skills. Working on a personal project using the MERN stack to create a dynamic web application.",
    },
]

export const about = [
    {
        desc: "I'm a Fullstack Developer skilled in HTML, CSS, JavaScript, React, Node.js, NestJS, TypeScript, PostgreSQL, MySQL, and MongoDB. I enjoy building scalable web apps and RESTful APIs. I’m passionate about clean code, performance optimization, and continuous learning.",
        desc1: " I bring both frontend finesse and backend strength to every project",
        cover: "/man.png",
    },
]

export const services = [
    {
      id: 1,
      icon: <Settings />,
      title: "Creative Design",
      desc: "Unlock your imagination with creative code that transforms ideas into interactive, artistic digital experiences",
    },
    {
      id: 2,
      icon: <CropRotate />,
      title: "Clean Code",
      desc: "Write clean code that’s readable, maintainable, and efficient—making development smoother and debugging effortless",
    },
    {
      id: 3,
      icon: <ViewInAr />,
      title: "Responsive Design",
      desc: "Craft responsive designs that adapt beautifully across all devices, ensuring seamless user experiences everywhere",
    },
    {
      id: 4,
      icon: <WifiRounded />,
      title: "Real Time Communication (WS)",
      desc: "Implement real-time features like chat and live updates using two-way communication between client and server",
    },
    {
      id: 5,
      icon: <BuildRounded/>,
      title: "RESTful APIs",
      desc: "Build structured RESTful APIs that enable smooth communication between frontend and backend using standard HTTP methods",
    },
    {
      id: 6,
      icon: <StorageRounded />,
      title: "Database Integration",
      desc: "Seamlessly connect and manage data with powerful database integration using SQL or NoSQL technologies.",
    },
  ]

export const projects = [
  {
    title : "Decor System",
    role : "Front-End Developer",
    work : "Frontend Development: Leveraged HTML, CSS, and JavaScript to build a clean,intuitive UI, enhancing the user experience through aresponsive design that adapts smoothly across devices. Integrated Bootstrap andCSS Flexbox/Grid for layout consistency andresponsiveness.Interactive Components: Implemented user-friendly, interactive componentsusing modular JavaScript and React for a more dynamic andengaging user interface. Utilized npm packages to streamline",
    date : "May 2023 -October 2023",
    img : "/download.png"
  },
  {
    title : "Feli-Tech Solution",
    role : "Full-Stack Developer",
    work : " Developed and maintained the backend for the company’s portfolio website. Built scalable and efficient APIs using Node.js andNest.js Integrated and optimized databases such as PostgreSQL Implemented authentication and authorization using JWT Enhanced backend performance while ensuring security best practices.",
    date : "November 2024 - Present",
    img : "/images.jpeg"
  },
  {
    title : "EventPlanner Project",
    role : "Full-Stack Developer",
    work : "Designed and developed a responsive and user-friendly event managementnterface using React. Implemented state management using React Hooks and Context API foreamless user interactions. Integrated API calls to fetch and display from own written JSON event dataynamically. Optimized UI/UX by improving accessibility, aos animations , and overallerformance. Ensured cross-browser compatibility and mobile responsiveness using vanilla CSS and Bootstrap.",
    date : "January 2025 - Present",
    img : "/event-planning.png"
  }
]

export const social = [
  {
    icon: <GitHub />,
    url : "https://github.com/meekailkhan"
  },
  {
    icon: <Twitter />,
    url : "https://x.com/MeekailAslam"
  },
  {
    icon: <Instagram />,
    url : "https://www.instagram.com/meekailaslam123/"
  },
  {
    icon: <LinkedIn />,
    url : "https://www.linkedin.com/in/meekail-aslam-1a1a8726b/"
  },
]

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Sardarpura 5th Road",
    text2: "Rajsthan Joadhpur 342001",
  },
  {
    icon: <PhoneIphone />,
    text1: "+91 8696935387",
    text2: "+91 7374812144",
  },
  {
    icon: <EmailOutlined />,
    text1: "meekailkhan123aar@gmail.com",
    text2: "meekailkhan466@gmail.com",
  },
]