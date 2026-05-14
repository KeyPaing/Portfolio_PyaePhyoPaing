import avatarImg from '../assets/profile_photo.jpg';

import { 
  Brain, 
  Cpu, 
  Network, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  FolderRoot, 
  BookOpen, 
  Award, 
  Languages, 
  Mail, 
  Github, 
  Linkedin, 
  Globe,
  MapPin,
  Bot
} from 'lucide-react';

export const portfolioData = {
  profile: {
    name: "Pyae Phyo Paing",
    title: "Junior AI Engineer",
    avatar: avatarImg,
    bio: "Architecting the future of intelligence. Specialized in Large Language Models, Generative AI, and Neural Architecture Search. Bridging the gap between cutting-edge research and production-scale AI systems.",
    location: "Bangkok, Thailand",
    email: "pyaephyopaing6303@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/PyaePhyoPaing-mfu", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pyae-phyo-paing-2643b02b4/", icon: Linkedin }
    ]
  },
  education: [
    {
      institution: "Mae Fah Luang University",
      degree: "BEng in Software Engineering",
      period: "2022 - 2026",
      description: "GPA : 3.82/4.00",
      icon: GraduationCap
    }
  ],
  experience: [
    {
      company: "BANPU PUBLIC COMPANY LIMITED",
      role: "Data Science Intern",
      period: "January - April 2026",
      description: "Built scalable enterprise GenAI infrastructure and managed end-to-end data workflows involving unstructured extraction, strategic chunking, and vector embedding. By applying multi-agent architecture and LLM-powered RAG systems, I ensure high-precision, context-aware information retrieval while driving operational efficiency across the organization.",
      skills: ["Vector Database", "Azure AI Foundry", "RAG", "LlamaIndex", "Multi-agents"],
      icon: Brain
    },
    {
      company: "ET.Verdict",
      role: "AI Engineer Intern",
      period: "May - August 2025",
      description: "I delivered high-impact AI systems for multilingual text summarization and risk analysis by leveraging RAG and multi-agent frameworks. Throughout the end-to-end development lifecycle, I managed everything from model setup and evaluation to deployment-ready integration. By collaborating closely with backend and frontend teams, I ensured the seamless implementation of sophisticated AI services into production environments.",
      skills: ["LLMs","FastAPI", "R&D", "Multilingual", "Multi-agents Framework", "SQL"],
      icon: Network
    }
  ],
  projects: [
    {
      title: "LLM-Powered Multi-agents Code Refactoring System",
      description: "Research based project which focused on automated code refactoring using a sophisticated combination of Multi-Agent LLM Orchestration and Retrieval-Augmented Generation (RAG). ",
      responsibilities: [
        "Tested on different LLMs for Domain Specific",
        "Contributed in implementing multi-agents creation",
        "Maintained the system for advanced retrieval strategies and handled vector storage management"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["VertexAI", "Python", "Google Cloud Platform", "LLMOps", "LLM Evaluation", "RAG"],
      icon: Cpu
    },
    {
      title: "Gamified AI-Assistant Platform",
      description: "Research based project which focused on transforming ordinary educational gamified platfrom to AI-powered system",
      responsibilities: [
        "Designed and developed the AI Pipeline",
        "Handled the data preprocessing part for accurate retrieval contents",
        "Collaborated with both frontend and backend team for better integration of AI feature into the existing system"
      ],
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
      tags: ["Groq", "Python", "Vector DB", "FastAPI", "Prompt Engineering"],
      icon: Network
    },
    {
      title: "Reportify - Accident Reporting Platform",
      description: "a web-based accident reporting platform that enables users to report accidents, share real-time updates, and track locations using Google Maps integration.",
      responsibilities: [
        "Contributed in developing a real-time accident reporting web application using React and Firebase.",
        "Tested and debugged application features to ensure system reliability and performance.",
        "Implemented user authentication and real-time data synchronization with Firestore."
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Firebase", "Node.js", "Google Map API"],
      icon: Bot
    }
  ],
  research: [
    {
      title: "RepoAI: Automated code refactoring through multi-agent LLM orchestration and retrieval-augmented generation.",
      publication: "Science of Computer Programming, Volume 253",
      year: "2026",
      link: "https://doi.org/10.1016/j.scico.2026.103477",
      icon: Sparkles
    }
  ],
  skills: {
    technical: [
      { name: "ML Frameworks", items: ["PyTorch", "Pandas", "TensorFlow", "Scikit-Learn", "HuggingFace", "Spark"] },
      { name: "AI/LLM Tools", items: ["HuggingFace", "LangChain", "LlamaIndex", "Azure AI Foundry", "Vector DBs", "Unsloth", "Embedding"] },
      { name: "Mutli-agents Frameworks", items: ["LangGraph", "AutoGen", "CrewAI"]},
      { name: "Infrastructure", items: ["FastAPI", "Docker", "GCP Vertex AI", "Firebase", "PostgreSQL"] }
    ],
    languages: [
      { name: "English", level: "Advanced" },
      { name: "Burmese", level: "Native"},
      { name: "Python", level: "Advanced" },
    ]
  },
  certifications: [
    {
      name: "Python For Data Science, AI & Development",
      issuer: "IBM",
      date: "2025",
      icon: Award
    },
    {
      name: "Python Data Structure",
      issuer: "University of Michigan",
      date: "2021",
      icon: Award
    },
    {
      name: "AI Agentic Design Patterns with AutoGen",
      issuer: "Microsoft",
      date: "2025",
      icon: Award
    },
    {
      name: "Introducing Generative AI with AWS",
      issuer: "Udacity",
      date: "2025",
      icon: Award
    },

  ]
};
