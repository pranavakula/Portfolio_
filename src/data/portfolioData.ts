import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "AKULA PRANAV",
    initials: "AP",
    title: "Software Engineer | AI & Agentic Systems | Cricketer",
    roleSubtitle: "SOFTWARE ENGINEER // AI & AGENTIC SYSTEMS // RESEARCHER",
    tagline: "Building scalable software, exploring emerging AI, and turning complex problems into practical solutions.",
    location: "Hyderabad, Telangana, India",
    phone: "+91-9390601919",
    bio: [
      "Computer Science engineer specializing in full-stack architecture, agentic AI workflows, and scalable distributed systems.",
      "Hands-on production experience in Agent Studio at Tredence Analytics, Amazon ML Summer School graduate, and IEEE conference researcher."
    ],
    email: "pranavakula26@gmail.com",
    socials: {
      github: "https://github.com/pranavakula",
      linkedin: "https://linkedin.com/in/pranav-akula",
      instagram: "https://instagram.com/",
    },
    cvUrl: "#contact",
    // 💡 To change your Hero Portrait photo:
    // Option 1: Paste any image URL here (e.g., from LinkedIn, GitHub, Imgur, or Google Drive)
    // Option 2: Place an image in the public folder (e.g., public/pranav.jpg) and set: "/pranav.jpg"
    portraitUrl: "https://i.ibb.co/yTTV3cM/photo.jpg",
  },
  cricket: {
    headline: "Beyond the Screen.",
    subheading: "Performance, tactical strategy, and mental resilience under pressure.",
    role: "South Zone Inter-University Batsman & College Cricket Team Captain",
    battingStyle: "Top-Order Batsman",
    bowlingStyle: "Tactical Field Setter & Match Strategist",
    actionPhotoUrl: "https://i.ibb.co/3yYxjhsQ/t-1.jpg",
    gallery: [
      {
        url: "https://i.ibb.co/3yYxjhsQ/t-1.jpg",
        title: "Match Inning & Shot Execution",
        caption: "Top-order anchor batting in inter-collegiate championship tournament play."
      },
      {
        url: "https://i.ibb.co/hRb3bSRZ/t-3.jpg",
        title: "Tournament Victory & Podium",
        caption: "Celebrating collegiate tournament championship success with the team."
      },
      {
        url: "https://i.ibb.co/MDpSJ3bR/t-2.jpg",
        title: "Field Captaincy & Strategy",
        caption: "Active on-field tactical placements, team huddle, and match composure."
      },
      {
        url: "https://i.ibb.co/twNdWWKx/t-4.jpg",
        title: "Championship Trophy Presentation",
        caption: "Lifting the championship trophy alongside college cricket squad."
      }
    ],
    keyMindsets: [
      {
        title: "Tactical Leadership & Captaincy",
        description: "Serving as Captain of the Amrita Vishwa Vidyapeetham College Cricket Team (2024–Present), coordinating tournament preparation, managing diverse player strengths, and maintaining tactical composure under match pressure.",
        cricketAspect: "Field placements, bowler rotation & team unity",
        techSynergy: "Engineering team alignment & agile sprint execution"
      },
      {
        title: "High-Pressure Decision Making",
        description: "Selected to compete in the South Zone Inter-University Cricket Championship representing Amrita Vishwa Vidyapeetham against premier universities across South India. Split-second shot selection mirrors low-latency debugging in distributed systems.",
        cricketAspect: "Calculated risk assessment at the crease",
        techSynergy: "Incident triage & zero-downtime troubleshooting"
      },
      {
        title: "Uncompromising Discipline & Stamina",
        description: "Intensive fitness conditioning, multi-day match endurance, and relentless technical nets cultivate the deep focus required to architect complex data pipelines and multi-agent AI systems.",
        cricketAspect: "Morning fitness conditioning & batting drills",
        techSynergy: "Code craftsmanship & systematic test coverage"
      }
    ],
    timeline: [
      {
        year: "2024 – PRESENT",
        title: "College Cricket Team Captain",
        subtitle: "Amrita Vishwa Vidyapeetham College Cricket Team",
        description: "Appointed Captain to lead the university college cricket team in competitive inter-collegiate tournaments, overseeing match preparation, player consistency, and field leadership.",
        type: "leadership"
      },
      {
        year: "2024 – 2025",
        title: "South Zone Inter-University Player",
        subtitle: "Represented Amrita Vishwa Vidyapeetham Across South India",
        description: "Selected as a specialist batsman to represent the university in the prestigious South Zone Inter-University Cricket competition against top collegiate institutions across South India.",
        type: "competition"
      },
      {
        year: "2022 – 2024",
        title: "Top-Order Batsman & Core Squad",
        subtitle: "University Competitive Cricket",
        description: "Consistently opened and anchored batting innings in high-stakes matches, setting aggressive tactical foundations with high discipline.",
        type: "milestone"
      }
    ]
  },
  skills: [
    {
      category: "Backend & Systems",
      description: "Architecting resilient microservices, high-throughput APIs, and agentic workflows.",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "Spring Boot (Java)", highlight: true },
        { name: "RESTful API Architecture", highlight: true },
        { name: "JWT Authentication & Security" },
        { name: "MySQL & Relational Modeling" },
        { name: "SQL Query Optimization" }
      ]
    },
    {
      category: "Agentic AI & Machine Learning",
      description: "Building intelligent multi-agent platforms and machine learning prediction pipelines.",
      skills: [
        { name: "Agentic AI & Multi-Agent Systems", highlight: true },
        { name: "Agent Workflows & Node Configs", highlight: true },
        { name: "Agent Studio Platform" },
        { name: "Scikit-learn", highlight: true },
        { name: "Support Vector Machines (SVM)" },
        { name: "Random Forest & Logistic Regression" },
        { name: "Data Preprocessing & Feature Selection" },
        { name: "Generative AI & LLMs Concepts" }
      ]
    },
    {
      category: "Programming Languages",
      description: "Robust command of object-oriented, systems, and scripting languages.",
      skills: [
        { name: "C++", highlight: true },
        { name: "Java", highlight: true },
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
        { name: "JavaScript / TypeScript" }
      ]
    },
    {
      category: "Frontend & Analytics",
      description: "Responsive user interfaces and data-driven business intelligence dashboards.",
      skills: [
        { name: "React.js", highlight: true },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS & Responsive UI" },
        { name: "Power BI", highlight: true },
        { name: "Tableau", highlight: true },
        { name: "KPI Dashboard Engineering" }
      ]
    },
    {
      category: "Core Computer Science",
      description: "Rigorous theoretical grounding in computational structures and systems engineering.",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true },
        { name: "Operating Systems & Concurrency", highlight: true },
        { name: "Computer Architecture", highlight: true },
        { name: "Database Management Systems (DBMS)" },
        { name: "Process Scheduling & IPC" },
        { name: "Memory Management" },
        { name: "Object-Oriented Programming (OOP)" }
      ]
    }
  ],
  projects: [
    {
      id: "project-01",
      title: "UnicornVision — AI-Driven Multi-Agent Investment Platform",
      tagline: "Autonomous multi-agent system synthesizing market sentiment and portfolio data for startup investment recommendations.",
      category: "AGENTIC AI // FULL-STACK",
      problem: "Venture capitalists and angel investors struggle to assimilate unstructured pitch decks, founder sentiment, market indicators, and real-time portfolio telemetry into actionable investment decisions.",
      solution: "Engineered UnicornVision, a multi-agent AI system where specialized autonomous agents collaborate on sentiment analysis, financial modeling, and risk scoring to deliver institutional-grade startup investment recommendations.",
      technologies: ["Python", "Multi-Agent Systems", "LLM Workflows", "Sentiment Analysis", "REST APIs", "React.js"],
      role: "Lead Agentic AI Architect & Full-Stack Developer",
      githubUrl: "https://github.com/pranavakula",
      liveDemoUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        "Collaborative multi-agent architecture with specialized role prompts and task handoffs",
        "Autonomous market sentiment analysis from real-time news and financial feeds",
        "Dynamic portfolio telemetry and venture capital risk profiling",
        "Explainable AI-driven investment recommendations with confidence scoring",
        "Developed during InfinityAI Hackathon by Tredence Analytics (March 2025)"
      ],
      challenges: "Synchronizing agent states and mitigating hallucinations across multi-agent consensus steps while preserving fast response latencies.",
      outcome: "Built and showcased at the Tredence Analytics InfinityAI Hackathon (March 2025), demonstrating autonomous decision support for startup evaluations."
    },
    {
      id: "project-02",
      title: "CampusMart — College eCommerce Marketplace",
      tagline: "Full-stack campus marketplace engine built with Java Spring Boot and secure JWT authentication.",
      category: "BACKEND // FULL-STACK",
      problem: "University students lack a secure, localized, and verified digital ecosystem to exchange academic materials, tech gear, and essentials safely within campus borders.",
      solution: "Designed and built CampusMart, a modular full-stack eCommerce platform with Spring Boot, robust RESTful APIs, role-based JWT authentication, and structured MySQL database schema.",
      technologies: ["Java", "Spring Boot", "REST APIs", "JWT Authentication", "MySQL", "OOP"],
      role: "Backend Architect & Full-Stack Engineer",
      githubUrl: "https://github.com/pranavakula",
      liveDemoUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        "Clean layered architecture adhering to strict Object-Oriented design patterns",
        "Stateless security layer with token-based JWT authentication and authorization",
        "Full CRUD REST API endpoints for product catalogs, cart management, and order states",
        "Relational MySQL database with indexed queries and transaction integrity",
        "Tailored for trusted campus user authentication and instant item discovery"
      ],
      challenges: "Ensuring secure token revocation and role segregation between student buyers, sellers, and campus administrators.",
      outcome: "Delivered a production-ready, performant campus platform with clean API specifications and comprehensive unit testing."
    },
    {
      id: "project-03",
      title: "Business Data Analytics & KPI Dashboard",
      tagline: "Enterprise operational intelligence solution automating KPI tracking and executive decision making.",
      category: "DATA & ANALYTICS // BI",
      problem: "Operational decision makers frequently face delayed insights due to siloed relational data, manual spreadsheet workflows, and lack of real-time KPI visibility.",
      solution: "Architected an automated analytics pipeline connecting SQL databases with Python data processing and interactive Power BI / Tableau dashboards to deliver actionable business intelligence.",
      technologies: ["Python", "SQL", "Power BI", "Tableau", "Data Modeling", "ETL"],
      role: "Data Analyst & Dashboard Engineer",
      githubUrl: "https://github.com/pranavakula",
      liveDemoUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        "Automated operational KPI tracking with drill-down views across business units",
        "Optimized SQL data extraction pipelines eliminating redundant aggregations",
        "Executive-ready interactive visualizations built in Power BI and Tableau",
        "Trend forecasting and anomaly detection scripts written in Python",
        "Automated reporting schedules delivering weekly operational health digests"
      ],
      challenges: "Designing intuitive multi-dimensional dashboards without overwhelming executive stakeholders with raw data noise.",
      outcome: "Automated manual reporting workflows, cutting reporting turnaround time and surfacing crucial efficiency bottlenecks."
    },
    {
      id: "project-04",
      title: "Insurance Eligibility Prediction System",
      tagline: "End-to-end machine learning pipeline comparing classification models for risk underwriting.",
      category: "MACHINE LEARNING // SCIKIT-LEARN",
      problem: "Traditional underwriting assessments rely on slow manual checks with inconsistent evaluation criteria across disparate applicant risk profiles.",
      solution: "Developed a complete machine learning classification pipeline with rigorous feature engineering, data preprocessing, and systematic benchmarking across multiple algorithms.",
      technologies: ["Python", "Scikit-learn", "SVM", "Logistic Regression", "Random Forest", "OOP"],
      role: "Machine Learning Engineer",
      githubUrl: "https://github.com/pranavakula",
      liveDemoUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        "Comprehensive data preprocessing with missing value imputation and scaling",
        "Statistical feature selection and correlation heatmaps to prevent multicollinearity",
        "Side-by-side benchmarking of SVM, Logistic Regression, and Random Forest",
        "Rigorous cross-validation, ROC-AUC curve analysis, and confusion matrix auditing",
        "Modular object-oriented Python code structured for plug-and-play model testing"
      ],
      challenges: "Handling class imbalance in applicant profiles while avoiding overfitting on high-dimensional demographic attributes.",
      outcome: "Engineered an accurate predictive model that maximizes sensitivity and precision, yielding automated eligibility classifications in milliseconds."
    }
  ],
  experience: [
    {
      year: "DEC 2025 – MAR 2026",
      role: "Full Stack Developer Intern",
      organization: "Tredence Analytics",
      location: "Bengaluru / Remote, India",
      description: "Contributed to backend development and system architecture for an enterprise agent-based platform, working directly with modern agentic AI architectures.",
      responsibilities: [
        "Contributed to backend development and system architecture for an enterprise agent-based platform.",
        "Implemented and managed multiple node configurations supporting scalable, resilient agent workflows.",
        "Collaborated on 'Agent Studio', a core platform for authoring, configuring, and deploying autonomous agents.",
        "Assisted with debugging, unit testing, and performance optimization of backend microservices.",
        "Worked on improving system throughput, latency, and scalability across multi-agent pipelines.",
        "Gained practical production experience working with modern agentic AI architectures and enterprise analytics systems."
      ],
      technologies: ["Node.js", "Express.js", "Agentic AI", "Agent Workflows", "Python", "RESTful APIs", "Distributed Architecture"],
      achievements: [
        "Successfully delivered critical node configurations inside Agent Studio facilitating complex multi-step agent graphs.",
        "Enhanced backend reliability and request throughput during high-concurrency stress test simulations."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "Amrita Vishwa Vidyapeetham, Kollam, Kerala",
      year: "2022 – 2026",
      status: "Final Year Student (CGPA: 8.56 / 10)",
      skills: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Architecture",
        "Database Management Systems (DBMS)",
        "Memory Management & Process Scheduling",
        "Object-Oriented Programming (OOP)"
      ],
      achievements: [
        "Consistent academic standing maintaining an 8.56 / 10 CGPA across the core Computer Science curriculum.",
        "Deep academic specialization in Operating Systems, Database Management Systems, and Distributed Computing.",
        "Comprehensive coursework in discrete mathematics, compiler design fundamentals, and algorithm optimization."
      ]
    },
    {
      degree: "Class XII — CBSE",
      university: "Narayana E-Techno School, Hyderabad, Telangana",
      year: "2020 – 2022",
      status: "Completed (82%)",
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science Fundamentals"
      ],
      achievements: [
        "Secured 82% in CBSE Senior Secondary examinations with strong quantitative foundation."
      ]
    },
    {
      degree: "Class X — SSC Telangana",
      university: "FIITJEE World School, Hyderabad, Telangana",
      year: "2010 – 2020",
      status: "Completed (CGPA: 10 / 10)",
      skills: [
        "Mathematics",
        "Science",
        "Analytical Problem Solving",
        "Foundational Computing"
      ],
      achievements: [
        "Achieved a perfect 10 / 10 CGPA in Secondary School Certificate (SSC) examinations."
      ]
    }
  ],
  milestones: [
    {
      number: "01",
      category: "TECHNOLOGY",
      title: "Amazon ML Summer School 2025",
      subtitle: "Selected Participant (Aug 09 – Aug 31, 2025)",
      description: "Selected for the prestigious Amazon ML Summer School taught by Amazon Scientists, covering Deep Neural Networks, Generative AI & LLMs, Dimensionality Reduction, and Reinforcement Learning."
    },
    {
      number: "02",
      category: "TECHNOLOGY",
      title: "InfinityAI Hackathon — Tredence Analytics",
      subtitle: "UnicornVision Multi-Agent Platform (March 2025)",
      description: "Architected UnicornVision at the InfinityAI Hackathon, deploying autonomous collaborative agents for startup sentiment, portfolio risk assessment, and investment recommendations."
    },
    {
      number: "03",
      category: "ACADEMICS",
      title: "IEEE ICCCNT 2025 Research Presentation",
      subtitle: "Post-Quantum Cryptography in 5G IoT (July 2025)",
      description: "Authored and presented academic research on Post-Quantum Cryptography in 5G IoT at the IEEE-sponsored ICCCNT 2025 international conference held at IIT Indore."
    },
    {
      number: "04",
      category: "LEADERSHIP",
      title: "South Zone Inter-University & College Captain",
      subtitle: "Amrita Vishwa Vidyapeetham (2024 – Present)",
      description: "Selected as batsman to represent Amrita Vishwa Vidyapeetham at the South Zone Inter-University Cricket tournament; currently Captain of the college cricket team."
    }
  ],
  philosophy: {
    quote: "Discipline on the field. Curiosity behind the screen.",
    author: "Akula Pranav",
    subtext: "Building scalable software, exploring emerging AI, and turning complex problems into practical solutions."
  }
};
