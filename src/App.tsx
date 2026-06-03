import { useState } from "react";

import me from "./assets/me.jpeg";

import bang1 from "./assets/bang1.jpeg";
import bang2 from "./assets/bang2.jpeg";
import bang3 from "./assets/bang3.jpeg";
import bang4 from "./assets/bang4.jpeg";
import bang5 from "./assets/bang5.jpeg";
import bang6 from "./assets/bang6.jpeg";
import bang7 from "./assets/bang7.jpeg";
import bang8 from "./assets/bang8.jpeg";

import noteapp1 from "./assets/noteapp1.jpeg";
import noteapp2 from "./assets/noteapp2.jpeg";

type ProjectLink = {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
};

type Project = {
  title: string;
  type: string;
  description: string;
  points: string[];
  tech: string[];
  highlight: string;
  links: ProjectLink[];
  images?: string[];
  diagram?: string[];
};

type SkillCategory = {
  title: string;
  items: string[];
};

const LINKS = {
  github: "https://github.com/mohamedtah22",
  linkedin: "https://linkedin.com/in/mohamed-taha-02314b314",
  bangApk: "https://github.com/mohamedtah22/bang-/releases/tag/v1.0",
};

const projects: Project[] = [
  {
    title: "Bang! Real-Time Multiplayer Mobile Game",
    type: "Mobile Game / Full-Stack / Real-Time Systems",
    description:
      "A real-time multiplayer mobile card game inspired by BANG!, built with an Expo/React Native client and a Node.js/TypeScript WebSocket server. This is my flagship project because it combines frontend, backend, real-time communication, game-state management, UI/UX, debugging, and deployment into one complete product.",
    points: [
      "Built a WebSocket-based multiplayer backend that manages rooms, players, turns, actions, timers, and live state broadcasting.",
      "Implemented complex game flows including card actions, equipment, character abilities, pending responses, reconnect handling, and disconnected-player behavior.",
      "Designed mobile UI states and overlays for turn actions, responding, reviving, discarding, abilities, effects, animations, and sound feedback.",
      "Solved production-style real-time bugs such as stale state, duplicate connections, timer mismatch, reconnect races, and pending-action resolution.",
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Real-Time State Sync",
      "Render",
    ],
    highlight: "APK Demo",
    links: [
      {
        label: "APK Demo",
        url: LINKS.bangApk,
        variant: "primary",
      },
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/bang-",
        variant: "secondary",
      },
      {
        label: "Backend Repo",
        url: "https://github.com/mohamedtah22/bang-game-server",
        variant: "secondary",
      },
    ],
    images: [bang1, bang2, bang3, bang4, bang5, bang6, bang7, bang8],
  },
  {
    title: "Notes App - Full-Stack CRUD Web Application",
    type: "React / Express / MongoDB",
    description:
      "A full-stack notes application currently being developed with a React/TypeScript frontend and an Express + MongoDB backend. The project focuses on building a clean full-stack product with reliable client-server communication, reusable UI components, state management, API integration, and testing.",
    points: [
      "Building CRUD flows for creating, reading, updating, and deleting notes using a REST API.",
      "Using React with TypeScript, reusable components, forms, note cards, pagination, and clean client-side structure.",
      "Connecting the frontend to an Express backend with MongoDB/Mongoose as the data layer.",
      "Practicing testing and debugging with Jest, Playwright, Postman, browser DevTools, server logs, and stable test IDs.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Axios",
      "Jest",
      "Playwright",
      "REST APIs",
    ],
    highlight: "In Progress",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/FrontEndbgu",
        variant: "primary",
      },
    ],
    images: [noteapp1, noteapp2],
  },
  {
    title: "AWS Distributed Text Processing Pipeline",
    type: "AWS / Distributed Workers / Queue-Based Architecture",
    description:
      "A cloud-based distributed processing system built around a manager-worker architecture. Input jobs are uploaded, split into smaller tasks, pushed through queues, processed asynchronously by workers, and collected into final results. This project demonstrates practical distributed-systems thinking and cloud service coordination.",
    points: [
      "Used AWS S3 for input/output storage and AWS SQS for task/result queues.",
      "Built a manager-worker flow where jobs are split, processed asynchronously, and aggregated into final output.",
      "Practiced reliability concepts such as long polling, visibility timeout, delete-after-success behavior, retries, and deduplication.",
      "Strengthened understanding of distributed execution, queue-driven communication, graceful termination, and job completion tracking.",
    ],
    tech: [
      "AWS S3",
      "AWS SQS",
      "AWS EC2",
      "Linux",
      "Distributed Systems",
      "Manager-Worker Architecture",
      "Long Polling",
      "Visibility Timeout",
    ],
    highlight: "Cloud Architecture",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MohamedAli74/Text-Analysis-in-the-Cloud",
        variant: "primary",
      },
    ],
    diagram: [
      "LocalApp",
      "S3 Input",
      "SQS Tasks",
      "Manager",
      "Workers",
      "SQS Results",
      "Final Output",
    ],
  },
  {
    title: "Operating Systems & Linux Systems Programming",
    type: "C / Linux / xv6 / Kernel-Level Concepts",
    description:
      "Low-level operating systems work focused on understanding what happens beneath the application layer. These projects strengthened my ability to reason about processes, memory, concurrency, file descriptors, system calls, and user-kernel interaction — foundations that are valuable for backend, infrastructure, embedded, and performance-sensitive software.",
    points: [
      "Implemented and debugged shell behavior, process creation, wait/exit logic, pipes, redirection, signals, and file descriptor handling.",
      "Worked with xv6-style user-kernel interaction, system-call behavior, process state, shared memory, and low-level OS mechanisms.",
      "Built synchronization mechanisms such as Peterson locks and tournament-tree locks.",
      "Strengthened understanding of race conditions, mutual exclusion, process coordination, memory behavior, and debugging in Linux-like environments.",
    ],
    tech: [
      "C",
      "Linux",
      "xv6",
      "Processes",
      "System Calls",
      "File Descriptors",
      "Pipes",
      "Signals",
      "Concurrency",
      "Synchronization",
      "Shared Memory",
      "Race Conditions",
    ],
    highlight: "Low-Level CS",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/xv6-Shared-Memory-Support",
        variant: "primary",
      },
    ],
    diagram: [
      "User Program",
      "System Call",
      "Kernel",
      "Process Table",
      "Memory",
      "Synchronization",
    ],
  },
  {
    title: "Warehouse Management System",
    type: "C++ / Low-Level Design / OOP",
    description:
      "A C++ warehouse management system built with a strong focus on low-level software design, object-oriented architecture, memory-aware programming, and clean business-logic modeling. The project simulates a real warehouse workflow using structured C++ classes and system state transitions without relying on high-level frameworks.",
    points: [
      "Designed structured C++ classes to model warehouse entities, actions, state changes, and business behavior.",
      "Focused on object lifecycle, clean class responsibilities, data ownership, and memory-aware program structure.",
      "Built backend-style logic close to the language level, strengthening control over program flow and system design.",
      "Demonstrates practical C++ OOP foundations useful for systems, backend infrastructure, and embedded-style software roles.",
    ],
    tech: [
      "C++",
      "OOP",
      "Low-Level Design",
      "Memory-Aware Programming",
      "Classes",
      "Object Lifecycle",
      "Data Modeling",
      "Business Logic",
      "System Architecture",
    ],
    highlight: "C++ Low-Level Project",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/warehouse",
        variant: "primary",
      },
    ],
    diagram: [
      "Domain Models",
      "Warehouse State",
      "Actions",
      "Business Logic",
      "State Updates",
      "Output",
    ],
  },
  {
    title: "Scheme Compiler to Assembly",
    type: "OCaml / Scheme / Assembly / Compiler Construction",
    description:
      "A deep compiler-construction project where I implemented parts of a compiler that translates a Scheme-like language into low-level Assembly using OCaml. This project connects high-level functional language features with low-level runtime behavior, code generation, and execution models.",
    points: [
      "Worked on parsing Scheme source code and representing programs as AST structures.",
      "Implemented semantic-analysis logic and AST transformations for language features.",
      "Handled compiler concepts such as lexical scoping, closures, lambdas, optional arguments, environments, runtime labels, and stack-related behavior.",
      "Generated assembly-style output, strengthening my understanding of how high-level language constructs become low-level executable behavior.",
    ],
    tech: [
      "OCaml",
      "Scheme",
      "Assembly",
      "Compiler Design",
      "Parsing",
      "AST Transformations",
      "Semantic Analysis",
      "Closures",
      "Lambdas",
      "Lexical Scoping",
      "Runtime Models",
      "Code Generation",
    ],
    highlight: "Scheme → Assembly",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/compiler",
        variant: "primary",
      },
    ],
    diagram: [
      "Scheme Source",
      "OCaml Parser",
      "AST",
      "Semantic Analysis",
      "Closure / Environment Model",
      "Assembly Code",
    ],
  },
  {
    title: "Server-Client Networking Project",
    type: "Java / Networking / Backend Communication",
    description:
      "A client-server communication project focused on networking fundamentals and request-response architecture. The project demonstrates how separated software components communicate, how a server handles incoming requests, and how backend logic is exposed through communication protocols.",
    points: [
      "Implemented client-server interaction and request/response communication patterns.",
      "Practiced server-side logic, connection flow, and separation between client behavior and backend processing.",
      "Strengthened understanding of networking concepts and how they appear in real application architecture.",
    ],
    tech: [
      "Java",
      "Networking",
      "Client-Server",
      "TCP/IP Concepts",
      "Backend Logic",
      "Request / Response",
    ],
    highlight: "Networking",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedtah22/SERVER-CLIENT",
        variant: "primary",
      },
    ],
    diagram: ["Client", "Request", "Server", "Processing", "Response"],
  },
  {
    title: "Text Mining / MapReduce Engine",
    type: "Distributed Text Processing / Data Flow",
    description:
      "A text-mining and MapReduce-style project focused on processing textual data using distributed-system thinking. The project is centered around task decomposition, mapping, reducing, aggregation, and large-scale data-flow concepts.",
    points: [
      "Broke text-processing work into smaller map/reduce-style stages.",
      "Practiced intermediate key/value data flow, aggregation, and distributed-processing concepts.",
      "Strengthened ability to reason about large-scale processing pipelines and how partial results combine into final output.",
    ],
    tech: [
      "Java",
      "MapReduce",
      "Text Mining",
      "Distributed Processing",
      "Data Flow",
      "Aggregation",
    ],
    highlight: "Data Processing",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MohamedAli74/Text-Mining-MapReduce-Engine",
        variant: "primary",
      },
    ],
    diagram: [
      "Input Text",
      "Map",
      "Intermediate Keys",
      "Reduce",
      "Aggregated Output",
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    items: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Reusable Components",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "MongoDB",
      "Mongoose",
      "SQL",
      "API Design",
      "Real-Time Systems",
    ],
  },
  {
    title: "Cloud, DevOps & Debugging",
    items: [
      "AWS S3",
      "AWS SQS",
      "AWS EC2",
      "Render",
      "Docker Basics",
      "Linux CLI",
      "Git",
      "GitHub",
      "Postman",
      "Browser DevTools",
      "Logs",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "Playwright",
      "API Testing",
      "Bug Reproduction",
      "Debugging",
      "Validation Mindset",
      "Test IDs",
    ],
  },
  {
    title: "Low-Level & Embedded Foundations",
    items: [
      "C",
      "C++",
      "Embedded C Concepts",
      "Low-Level Programming",
      "Pointers",
      "Memory Management",
      "Object Lifecycles",
      "System Calls",
      "File Descriptors",
      "Processes",
      "Threads",
      "Concurrency",
      "Synchronization",
      "Race Conditions",
      "Linux Systems Programming",
      "Performance-Aware Code",
      "Hardware-Aware Debugging",
      "RTOS Concepts",
      "Interrupts Concepts",
      "UART / I2C / SPI Concepts",
      "Microcontroller Concepts",
    ],
  },
  {
    title: "Computer Science Foundations",
    items: [
      "Operating Systems",
      "Compilers",
      "Networking",
      "Distributed Systems",
      "OCaml",
      "Scheme",
      "Assembly",
      "Java",
      "Data Structures",
      "Algorithms",
    ],
  },
];

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (image: string) => void;
}) {
  return (
    <article className="project-card">
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>

      <div className="project-main">
        <div className="project-top">
          <p>{project.type}</p>
          <span>{project.highlight}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <ul className="project-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={link.variant === "secondary" ? "secondary-link" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {project.images && project.images.length > 0 ? (
        <div className="project-gallery">
          {project.images.map((img, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              className="gallery-image-button"
              onClick={() => onImageClick(img)}
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${imageIndex + 1}`}
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="project-diagram">
          <p>Core Flow</p>

          <div className="diagram-flow">
            {project.diagram?.map((step, stepIndex) => (
              <div className="diagram-item" key={step}>
                <span>{step}</span>
                {stepIndex < (project.diagram?.length || 0) - 1 && (
                  <strong>→</strong>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main>
      <nav className="navbar">
        <h2>Mohamed Taha</h2>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-photo-side">
          <div className="hero-photo-ring">
            <img src={me} alt="Mohamed Taha" className="hero-photo" />
          </div>

          <div className="floating-card">
            <span>Open to</span>
            <strong>Student Software Roles</strong>
          </div>
        </div>

        <div className="hero-text">
          <p className="badge">
            Final-Year CS Student • GPA 84 • Full-Stack • Low-Level Systems
          </p>

          <h1>
            I build full-stack products, real-time systems, and low-level
            software.
          </h1>

          <p className="hero-description">
            I'm Mohamed Taha, a Computer Science student at Ben-Gurion University
            with a GPA of 84, focused on TypeScript, React, React Native,
            Node.js, WebSockets, databases, Linux, AWS, C/C++, operating
            systems, embedded systems foundations, and compiler construction.
          </p>

          <div className="hero-stats">
            <div>
              <strong>84</strong>
              <span>GPA</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>Full-Stack</strong>
              <span>Backend + Systems</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="outline"
            >
              GitHub
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="outline"
            >
              LinkedIn
            </a>

            <a href="mailto:mohamedt@post.bgu.ac.il" className="outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <p className="section-kicker">About Me</p>

        <h2>
          Full-stack developer with backend focus, low-level depth, and strong CS
          foundations.
        </h2>

        <p>
          I build practical software that connects frontend, backend, data flow,
          debugging, deployment, and testing into working systems. Alongside
          product-oriented projects, I also enjoy low-level work such as C/C++,
          Linux systems programming, operating systems, networking, embedded
          systems foundations, compilers, interpreters, memory-aware design, and
          language-processing projects.
        </p>
      </section>

      <section id="projects" className="section">
        <div className="section-title">
          <p>Selected Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-title">
          <p>Technical Foundation</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-sections">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills-grid">
                {category.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="section-kicker">Contact</p>

        <h2>Let's build something.</h2>

        <p>
          I am open to student software engineering roles, backend/full-stack
          internships, and roles involving TypeScript, React, Node.js,
          WebSockets, databases, AWS, Linux, C/C++, embedded foundations,
          operating systems, and backend architecture.
        </p>

        <div className="contact-links">
          <a href="mailto:mohamedt@post.bgu.ac.il">Email Me</a>

          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="outline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Expanded project screenshot"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}