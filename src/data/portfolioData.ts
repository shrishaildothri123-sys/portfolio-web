export interface Project {
  id: string;
  title: string;
  headline: string;
  category: 'Full-Stack' | 'AI / ML' | 'Systems' | 'All';
  description: string;
  longDescription: string;
  tags: string[];
  metrics: string[];
  architectureNotes: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'Production Ready' | 'Active Development' | 'Prototype';
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & Database' | 'AI / Machine Learning' | 'DevOps & Tools';
  level: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  roleType: 'Education' | 'Project Leadership' | 'Hackathon' | 'Open Source';
  description: string;
  achievements: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: 'Shrishail Dothri',
  title: 'AIML Student & Full-Stack Developer',
  institution: 'REVA University',
  degree: 'B.Tech in Computer Science & Engineering (AIML)',
  location: 'Bengaluru, Karnataka, India',
  email: 'shrishaildothri123@gmail.com',
  tagline: 'Building intelligent web apps and scalable architectures.',
  bio: 'Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at REVA University. Passionate about bridging neural systems with resilient full-stack web applications, distributed backend services, and clean developer tooling.',
  status: 'Open to Software Engineering & AI/ML Opportunities',
  github: 'https://github.com/shrishaildothri',
  linkedin: 'https://linkedin.com/in/shrishaildothri',
};

export const PROJECTS: Project[] = [
  {
    id: 'pet-mart',
    title: 'PET-MART',
    headline: 'Full-Stack Pet Care, Adoption & Supplies Ecosystem',
    category: 'Full-Stack',
    description: 'An end-to-end digital marketplace connecting animal shelters, pet adopters, certified veterinary specialists, and pet care suppliers with real-time catalog search and booking.',
    longDescription: 'PET-MART was engineered to solve fragmentation in pet adoption and veterinary care. Built with a decoupled MERN architecture, it features verified shelter onboarding, sub-150ms indexed pet search, real-time consultation appointment scheduling, and a secure checkout flow with transaction tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth', 'REST API'],
    metrics: [
      'Sub-150ms adoption filter query response time',
      'Role-based access control for Adopters, Clinicians, & Shelters',
      'Integrated medical history logging and vaccination reminders'
    ],
    architectureNotes: [
      'Stateless JWT session authentication with HTTP-only cookie refresh rotation',
      'MongoDB indexing on species, breed, geographic radius, and adoption readiness',
      'Optimized client bundle with dynamic code splitting and lazy asset loading'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/shrishaildothri/pet-mart',
    status: 'Production Ready',
    featured: true
  },
  {
    id: 'sahara',
    title: 'SAHARA',
    headline: 'AI-Driven Disaster Relief & Emergency Resource Coordination',
    category: 'AI / ML',
    description: 'A crisis logistics coordination platform aggregating real-time disaster alerts, predicting high-urgency medical supply demands, and routing rescue volunteers.',
    longDescription: 'SAHARA bridges the information gap between emergency rescue teams and displaced citizens during regional emergencies. Leveraging lightweight predictive models and resilient offline-first data stores, it calculates localized shelter capacity and dispatches critical rations efficiently.',
    tags: ['Python', 'FastAPI', 'React', 'Supabase', 'PostgreSQL', 'PyTorch', 'Leaflet Maps'],
    metrics: [
      'Prioritized urgency ranking for emergency supply distribution',
      'Offline-first incident logging with background sync resumption',
      'Live shelter bed telemetry and blood bank shortage notifications'
    ],
    architectureNotes: [
      'FastAPI async backend paired with Supabase PostgreSQL Row Level Security',
      'Transformer-based triage categorization parsing emergency SOS distress texts',
      'Geo-spatial spatial queries using PostGIS for nearest triage center resolution'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/shrishaildothri/sahara-relief',
    status: 'Production Ready',
    featured: true
  },
  {
    id: 'neuralsense',
    title: 'NeuralVision Sentinel',
    headline: 'Real-Time Edge Visual Inference & Defect Detection',
    category: 'AI / ML',
    description: 'Sub-second computer vision pipeline performing object localization and spatial anomaly detection with low-latency edge deployment.',
    longDescription: 'Engineered as an automated defect detection system utilizing fine-tuned neural models. Capable of processing real-time video frames, isolating structural anomalies, and dispatching event webhooks to enterprise telemetry collectors.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'FastAPI', 'Docker'],
    metrics: [
      '42 FPS sustained inference on edge compute accelerators',
      '94.8% mAP on industrial surface inspection benchmark',
      'Sub-12ms pipeline latency from camera buffer to detection bounding box'
    ],
    architectureNotes: [
      'Optimized TensorRT model quantization (FP16/INT8) for edge deployment',
      'Zero-copy frame sharing between camera capture threads and PyTorch worker pool',
      'Asynchronous webhook emitter with backpressure mitigation'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/shrishaildothri/neural-vision-sentinel',
    status: 'Active Development',
    featured: true
  },
  {
    id: 'nexuscore',
    title: 'NexusCore Event Broker',
    headline: 'High-Throughput Pub/Sub Telemetry & Streaming Mesh',
    category: 'Systems',
    description: 'Distributed WebSocket message broker and telemetry collector with distributed memory caching, rate limiting, and live observability metrics.',
    longDescription: 'Designed for high-concurrency microservice architectures requiring sub-millisecond event relay. Features automatic socket reconnections, binary packet compression, and real-time health telemetry.',
    tags: ['Node.js', 'TypeScript', 'Express', 'Redis', 'WebSockets', 'Docker'],
    metrics: [
      '50,000+ messages/sec sustained throughput in load testing',
      'Automatic fallback from WebSockets to long-polling transport',
      'Zero-downtime health checking and graceful degradation'
    ],
    architectureNotes: [
      'Distributed Redis Pub/Sub cluster backplane enabling horizontal scaling',
      'Token bucket algorithm for client connection rate-limiting',
      'Structured logging with correlation IDs for distributed tracing'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/shrishaildothri/nexus-broker',
    status: 'Production Ready',
    featured: false
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 'Advanced', context: 'Data Science, PyTorch, Scripting, FastAPI' },
  { name: 'JavaScript', category: 'Languages', level: 'Advanced', context: 'ESNext, Asynchronous runtime, V8' },
  { name: 'TypeScript', category: 'Languages', level: 'Intermediate', context: 'Type safety, generics, OOP' },
  { name: 'SQL', category: 'Languages', level: 'Intermediate', context: 'Complex joins, indexing, query plans' },
  { name: 'C++', category: 'Languages', level: 'Proficient', context: 'Data structures, algorithm optimization' },

  // Frontend
  { name: 'React', category: 'Frontend', level: 'Advanced', context: 'Custom hooks, state architectures, SPA' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', context: 'Design systems, fluid layouts, theme tokens' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Advanced', context: 'Semantic markup, flexbox, grid, animations' },
  { name: 'Next.js', category: 'Frontend', level: 'Intermediate', context: 'Server/client components, API routing' },

  // Backend & Database
  { name: 'Node.js', category: 'Backend & Database', level: 'Advanced', context: 'Event loop, microservices, file streams' },
  { name: 'Express', category: 'Backend & Database', level: 'Advanced', context: 'REST APIs, middleware, security headers' },
  { name: 'MongoDB', category: 'Backend & Database', level: 'Intermediate', context: 'Document modeling, Mongoose aggregation' },
  { name: 'MySQL', category: 'Backend & Database', level: 'Intermediate', context: 'Relational schemas, constraints, ACID' },
  { name: 'Supabase', category: 'Backend & Database', level: 'Intermediate', context: 'PostgreSQL, Row Level Security, Auth' },
  { name: 'REST APIs', category: 'Backend & Database', level: 'Advanced', context: 'Clean contracts, error formats, versioning' },

  // AI / Machine Learning
  { name: 'PyTorch', category: 'AI / Machine Learning', level: 'Intermediate', context: 'CNNs, transfer learning, model training' },
  { name: 'TensorFlow / Keras', category: 'AI / Machine Learning', level: 'Proficient', context: 'Neural network modeling, preprocessing' },
  { name: 'Computer Vision', category: 'AI / Machine Learning', level: 'Intermediate', context: 'OpenCV, YOLO, image segmentation' },
  { name: 'NumPy & Pandas', category: 'AI / Machine Learning', level: 'Advanced', context: 'Data pipelines, matrix manipulation, EDA' },
  { name: 'Scikit-Learn', category: 'AI / Machine Learning', level: 'Intermediate', context: 'Regression, classification, clustering' },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 'Advanced', context: 'Branching, PR reviews, CI workflows' },
  { name: 'Docker', category: 'DevOps & Tools', level: 'Intermediate', context: 'Multi-stage builds, container isolation' },
  { name: 'Postman', category: 'DevOps & Tools', level: 'Advanced', context: 'API verification, mock test suites' },
  { name: 'Linux / Bash', category: 'DevOps & Tools', level: 'Intermediate', context: 'Shell scripting, server management' },
  { name: 'VS Code', category: 'DevOps & Tools', level: 'Advanced', context: 'Debugging, extensions, profiling' }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-reva',
    period: '2023 — 2027 (Expected)',
    title: 'B.Tech in Computer Science & Engineering (AIML)',
    organization: 'REVA University',
    location: 'Bengaluru, India',
    roleType: 'Education',
    description: 'Pursuing comprehensive coursework in Artificial Intelligence, Machine Learning, Deep Neural Networks, Operating Systems, Database Management Systems, and Object-Oriented Software Design.',
    achievements: [
      'Maintained consistent high academic standing in core algorithmic disciplines',
      'Active participant and problem-solver in departmental technical coding forums',
      'Conducted specialized coursework projects in Computer Vision and Distributed Web Systems'
    ],
    technologies: ['Python', 'C++', 'Data Structures & Algorithms', 'Machine Learning', 'Linear Algebra']
  },
  {
    id: 'exp-fullstack',
    period: '2024 — 2025',
    title: 'Full-Stack Developer & Technical Lead',
    organization: 'PET-MART & SAHARA Initiatives',
    location: 'Bengaluru, India',
    roleType: 'Project Leadership',
    description: 'Architected and implemented production-grade web systems from initial data schema design through reactive frontend implementation and deployment.',
    achievements: [
      'Built PET-MART adopting modular MERN architecture with verified provider pipelines',
      'Designed SAHARA emergency triage system with real-time resource matching algorithms',
      'Standardized clean code conventions, Git workflows, and component design patterns'
    ],
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 'exp-hackathon',
    period: '2024',
    title: 'Hackathon Finalist & Lead Architect',
    organization: 'Inter-Collegiate Innovation Sprint',
    location: 'Bengaluru, India',
    roleType: 'Hackathon',
    description: 'Spearheaded a rapid 36-hour sprint delivering an AI-enabled crisis response prototype, pitching architectural viability and live demonstration to a panel of industry judges.',
    achievements: [
      'Integrated edge-friendly NLP text classifier for emergency SOS triage',
      'Awarded top finalist ranking among 50+ collegiate engineering teams',
      'Delivered fully functional responsive client and backend demo under intense time constraints'
    ],
    technologies: ['FastAPI', 'PyTorch', 'React', 'Leaflet', 'REST APIs']
  },
  {
    id: 'exp-opensource',
    period: '2023 — 2024',
    title: 'Open Source Contributor & Systems Researcher',
    organization: 'Independent Engineering Lab',
    location: 'Bengaluru, India',
    roleType: 'Open Source',
    description: 'Authored technical repositories, built reusable developer utilities, and explored performance tuning in modern JavaScript engines and Python scientific runtimes.',
    achievements: [
      'Built 15+ focused engineering projects examining real-time state, WebSockets, and deep learning',
      'Published open-source boilerplate templates used by collegiate peer developers',
      'Authored in-depth technical documentation and clean architectural diagrams'
    ],
    technologies: ['Git', 'TypeScript', 'Docker', 'Linux', 'Python']
  }
];

export const PHILOSOPHY = [
  {
    title: 'Architectural Rigor',
    summary: 'Prefer resilient simplicity over clever fragility. Decouple concerns, enforce strict data boundaries, and design systems that fail gracefully.',
    icon: 'Layers'
  },
  {
    title: 'Bridging AI to Reality',
    summary: 'A neural model is only as valuable as its usability. I bridge complex inference engines with deterministic, responsive web interfaces.',
    icon: 'Cpu'
  },
  {
    title: 'Performance as a Feature',
    summary: 'Every millisecond of latency and extra kilobyte matters. I obsess over index tuning, bundle optimization, and lean computational footprints.',
    icon: 'Zap'
  }
];
