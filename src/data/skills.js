import {
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaTools,
} from 'react-icons/fa';

export const skillCategories = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, accessible and user-friendly web interfaces.',
    icon: FaLaptopCode,
    gradient: 'linear(to-br, cyan.400, blue.500)',
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Chakra UI',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Developing APIs, server-side functionality and authentication systems.',
    icon: FaServer,
    gradient: 'linear(to-br, purple.400, pink.500)',
    skills: [
      'Node.js',
      'Express.js',
      'ASP.NET Core',
      'REST APIs',
      'JWT Authentication',
      'Prisma ORM',
    ],
  },
  {
    title: 'Mobile & Desktop',
    description:
      'Creating cross-platform mobile and Windows desktop applications.',
    icon: FaMobileAlt,
    gradient: 'linear(to-br, green.400, teal.500)',
    skills: [
      'Flutter',
      'Dart',
      'Android Development',
      'Windows Desktop',
      'SQLite',
      'Local Storage',
    ],
  },
  {
    title: 'Databases & Cloud',
    description:
      'Designing relational databases and connecting applications to cloud services.',
    icon: FaDatabase,
    gradient: 'linear(to-br, orange.400, red.500)',
    skills: [
      'PostgreSQL',
      'Microsoft SQL Server',
      'SQLite',
      'Supabase',
      'Database Design',
      'Data Modelling',
    ],
  },
  {
    title: 'AI & Data',
    description:
      'Exploring intelligent, data-driven and analytical software solutions.',
    icon: FaBrain,
    gradient: 'linear(to-br, pink.400, purple.500)',
    skills: [
      'Python',
      'Machine Learning',
      'AI Embeddings',
      'Vector Search',
      'Power BI',
      'Data Visualization',
    ],
  },
  {
    title: 'Tools & Deployment',
    description:
      'Managing source code, development workflows and application deployments.',
    icon: FaTools,
    gradient: 'linear(to-br, blue.400, cyan.500)',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'Vercel',
      'Render',
      'GitHub Pages',
      'Docker',
      'Visual Studio Code',
    ],
  },
];