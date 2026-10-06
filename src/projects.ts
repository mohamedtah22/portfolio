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

export type Project = {
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

export const LINKS = {
  github: "https://github.com/mohamedtah22",
  linkedin: "https://linkedin.com/in/mohamed-taha-02314b314",
  bangApk: "https://github.com/mohamedtah22/bang-/releases/tag/v1.0",
};

export const projects: Project[] = [
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
      "A full-stack notes application with a React/TypeScript frontend and an Express + MongoDB backend. The project focuses on building a clean full-stack product with reliable client-server communication, reusable UI components, state management, API integration, and testing.",
    points: [
      "Implemented CRUD flows for creating, reading, updating, and deleting notes using a REST API.",
      "Built with React with TypeScript, reusable components, forms, note cards, pagination, and clean client-side structure.",
      "Connected the frontend to an Express backend with MongoDB/Mongoose as the data layer.",
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
    highlight: "Full-Stack",
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


projects.splice(1, 0,
  {
    title: "Mini Linux Runtime & Embedded Toolkit",
    type: "Systems / Embedded Linux",
    description: "A C/Linux toolkit that follows program execution from a shell command through processes, ELF loading, memory and tracing. An embedded simulation layer adds an ARM64 target that runs under QEMU without physical hardware.",
    points: ["Implemented a Unix shell with pipelines, job control and signal handling, alongside ELF inspection, static loading and a custom memory allocator.", "Built periodic tasks, bounded ring buffers, a watchdog recovery state machine and an epoll-driven event loop.", "Added PTY virtual serial transport, CRC32-framed messages, firmware-image validation and ARM64 cross-compilation with QEMU self-tests."],
    tech: ["C", "Linux", "POSIX", "ARM64", "QEMU", "ELF"],
    highlight: "Systems Engineering",
    links: [{label: "GitHub", url: "https://github.com/mohamedtah22/embedded-systems-runtime"}],
  },
  {
    title: "World Cup Data Explorer",
    type: "Full-Stack / Data Engineering",
    description: "A football analytics dashboard that turns raw tournament data into searchable teams, player profiles and comparisons. A Python ETL pipeline feeds PostgreSQL, a Flask API exposes SQL-backed results, and React brings the data to the browser.",
    points: ["Built a reproducible ETL pipeline to normalize match data, resolve aliases and load relational entities in dependency order.", "Implemented filtered, paginated APIs for matches, teams and players, with head-to-head comparisons and leaderboards.", "Added data-quality reporting and PostgreSQL trigram indexes for player and team search."],
    tech: ["React", "Python", "Flask", "PostgreSQL", "SQL", "ETL"],
    highlight: "Data to Product",
    links: [{label: "GitHub", url: "https://github.com/mohamedtah22/world-cup-data-explorer"}],
  }
);
projects.push({
  title: "Stylometry & NLP Research",
  type: "Data / Machine Learning",
  description: "A reproducible study of stylistic change across 243 songs and 12 albums, combining linguistic features, topic modeling and classical classifiers with Sentence-BERT embeddings.",
  points: ["Used spaCy for morphology, syntax and named entities, alongside lexical and stylistic measurements.", "Evaluated models with album-grouped cross-validation to prevent songs from the same album leaking across train and test sets.", "Compared TF-IDF and full-song Sentence-BERT representations, with duplicate removal and explicit token-coverage checks."],
  tech: ["Python", "spaCy", "TF-IDF", "Sentence-BERT", "Cross-Validation"],
  highlight: "Applied NLP",
  links: [{label: "GitHub", url: "https://github.com/mohamedtah22/taylor-swift-stylometry-nlp"}]
});
const os = projects.find(p => p.title.startsWith('Operating Systems'))!;
os.title = 'xv6: Shared Memory & Process Coordination';
os.description = 'Extended xv6, a small teaching operating system, with shared-memory support. Multiple processes can map the same physical pages and coordinate writes to a shared logging buffer through atomic synchronization.';
os.points = ['Implemented shared-page mapping across process address spaces, with page-table changes and explicit shared-page ownership.', 'Used atomic compare-and-swap operations to synchronize a multi-process logging buffer.', 'Worked with system calls, process coordination and virtual-memory management inside a compact Unix-like kernel.'];
os.tech = ['C', 'xv6', 'Virtual Memory', 'System Calls', 'Atomic Operations'];
const compiler = projects.find(p => p.title.startsWith('Scheme Compiler'))!;
compiler.description = 'An end-to-end compiler written in OCaml that translates Scheme into native x86-64 assembly. The pipeline reads S-expressions, builds an AST, performs semantic analysis and emits NASM code linked with a custom runtime.';
compiler.points = ['Implemented lexical-address annotation, tail-call analysis and boxing for mutable variables captured by closures.', 'Generated closure environments, optional-arity lambdas and tail-call frame recycling.', 'Connected generated assembly to runtime value representations and the NASM/GCC toolchain.'];
compiler.tech = ['OCaml', 'Scheme', 'x86-64', 'NASM', 'Compiler Design'];
