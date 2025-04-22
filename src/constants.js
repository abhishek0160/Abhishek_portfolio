// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import flaskLogo from './assets/tech_logo/flask.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import skitlearnLogo from './assets/tech_logo/skitlearn.png';
import tensorLogo from './assets/tech_logo/tensorflow.png';
import wordpressLogo from './assets/tech_logo/wordpress.png';
import phpLogo from './assets/tech_logo/php.png';


// Experience Section Logo's
import celebalLogo from './assets/company_logo/celebal_te.png';
import insakeLogo from './assets/company_logo/inSake.png';

// Project Section Logo's
import diseasesFor from './assets/work_logo/diseases.png';
import colweb from './assets/work_logo/col1.png';
import mahabi from './assets/work_logo/mahadeva.png';
import quizapp from './assets/work_logo/quiz.png';
import hospitalman from './assets/work_logo/hospital.png';
import netflix from './assets/work_logo/netflixcl.png';


export const SkillsInfo = [
  {
    title: 'Machine Learning',
    skills: [
      { name: 'NumPy', logo : numpyLogo},
      { name: 'Pandas', logo : pandasLogo},
      { name :'Seaborn' , logo : seabornLogo},
      { name :'Scikit-learn' , logo : skitlearnLogo},
      { name : 'TensorFlow' , logo : tensorLogo}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'WordPress', logo : wordpressLogo},
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Flask', logo: flaskLogo},
      { name: 'PHP', logo: phpLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  
  
];

  export const experiences = [
    {
      id: 0,
      img: celebalLogo,
      role: "Data Science Intern",
      company: "Celebal Technologies",
      date: "May 2024 - Aug 2024",
      desc: "I designed and delivered a machine learning training program focused on industrial data, which boosted data-driven project initiatives by 40% within two months. By addressing key challenges in data analysis and model development, I improved overall model accuracy by 15%. Additionally, I completed over 120 hours of upskilling in Python, data analysis, data cleaning, and machine learning, leading to a 25% increase in project efficiency.",


      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
        "Data Analysis",
        "Data Cleaning",
        "Problem-Solving",
        "Scikit-learn",
        
      ],
    },
    {
      id: 1,
      img: insakeLogo,
      role: "Data Science Intern",
      company: "InSake Solution",
      date: "Sept 2023 - Nov 2023",
      desc: "Designed a training curriculum for machine learning on industrial data, enhancing project efficiency and accuracy. Applied data analysis and modeling techniques to improve outcomes by 15%. Completed over 120 hours of hands-on training in Python and machine learning.",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
        "Data Analysis",
        "Data Cleaning",
        "Problem-Solving",

      ],
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Diseases Prediction using Symptoms",
      description:
        "This project is a machine learning-based system that predicts possible diseases based on user-input symptoms. The goal is to assist in early diagnosis and encourage timely medical consultation.",
      image: diseasesFor,
      tags: ["NumPy","Pandas","Scikit-learn","Flask","HTML", "CSS", "JavaScript"],
      github: "https://github.com/abhishek0160/Diseases-forecasting.git"
    },
    {
      id: 1,
      title: "College Website",
      description:
        "This project is a responsive and user-friendly website designed for a college to provide essential information to students, faculty, and visitors. It includes pages for courses, departments, faculty profiles, admission details, events, and contact forms.",
      image: colweb,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap","Validation"],
      github: "https://github.com/abhishek0160/college_website.git",
    },
    {
      id: 2,
      title: "Mahadeva Sales Analysis",
      description:
        "This project involves building an interactive sales analysis dashboard for Mahadeva using Power BI. It helps visualize and track key business metrics such as total sales, product performance, regional trends, and customer insights in a dynamic and user-friendly format.",
      image: mahabi,
      tags: ["Power BI", "Excel/CSV", "DAX", "Power Query"],
      github: "https://github.com/abhishek0160/Sales_Analysis.git",
    },
    {
      id: 3,
      title: "Quiz Application",
      description:
        "This is a desktop-based quiz application built using Python’s Tkinter library. It allows users to take multiple-choice quizzes, track their scores, and view results instantly. The app provides an engaging way to test knowledge on various topics.",
      image: quizapp,
      tags: ["Python", "Tkinter", "JSON/CSV", "OOP Concepts"],
      github: "https://github.com/abhishek0160/Quiz_application.git",
    },
    {
      id: 4,
      title: "Hospital Management Network",
      description:
        "This project simulates a hospital management system network using Cisco Packet Tracer. It focuses on designing and configuring a secure and efficient network infrastructure for a hospital, enabling seamless communication between departments, data storage, and remote access for medical staff.",
      image: hospitalman,
      tags: ["Cisco Packet Tracer ", "TCP/IP ", "Router/Switch Configuration", "Security Protocols"],
      github: "https://github.com/abhishek0160/Hospital-Management-Network.git",
    },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "This project is a clone of the Netflix platform, where users can stream movies and TV shows, browse content by category, and create personal watchlists. It simulates the basic features of a streaming service with a responsive UI and user authentication.",
      image: netflix,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/abhishek0160/Netflix_Clone.git",
      webapp: "https://stalwart-sprite-4ef26b.netlify.app/",
    },
  ];  