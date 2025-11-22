import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'GoodDay',
    position: 'Data Analyst Intern',
    location: 'United States (Remote)',
    image: '/company/Goodday.png',
    description: [
      'Cleaned, transformed and analyzed large datasets using Python, Pandas and SQL, ensuring reliable and structured data pipelines.',
      'Built interactive dashboards for KPI tracking using Tableau & Power BI, improving data visibility for stakeholders.',
      'Performed exploratory data analysis (EDA) to derive insights that helped optimize user engagement metrics.',
      'Automated recurring analytics workflows, reducing manual reporting effort by 60%.',
    ],
    startDate: 'January 2024',
    endDate: 'April 2024',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  {
    isCurrent: false,
    company: 'Nohitatu Technologies Pvt. Ltd.',
    position: 'Backend Developer (SDE-1) Intern',
    location: 'Chennai, India (On-Site)',
    image: '/company/nohitatu.png',
    description: [
      'Developed RESTful APIs and authentication workflows using Node.js and Express.',
      'Improved performance of backend endpoints by optimizing database queries and implementing caching.',
      'Collaborated with frontend teams to design clean API contracts and ensure smooth integrations.',
      'Wrote automated tests and improved overall code quality through refactoring and modularization.',
    ],
    startDate: 'June 2024',
    endDate: 'July 2024',
    technologies: [
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: '#',
    github: '#',
    x: '#',
    linkedin: '#',
  },
  {
    isCurrent: false,
    company: 'Quantiphi India',
    position: 'Data Analyst Trainee',
    location: 'Freelance',
    image: '/company/quantiphi.png',
    description: [
      'Worked closely with senior analysts to understand business metrics and construct structured datasets.',
      'Designed SQL queries to extract, filter and aggregate data across large relational databases.',
      'Implemented statistical techniques to identify trends and anomaly patterns.',
      'Prepared analytical reports for internal teams, improving decision-making accuracy.',
    ],
    startDate: 'January 2025',
    endDate: 'March 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
    ],
    website: '#',
    github: '#',
  },
  {
    isCurrent: false,
    company: 'TechSphere Solutions',
    position: 'SDE-1 (Full Stack) Intern',
    location: 'Mumbai, India (Remote)',
    image: '/company/techsphere.png',
    description: [
      'Built full-stack modules using React, Node.js, and MongoDB for internal client dashboards.',
      'Developed responsive UI components and improved UX for customer-facing portals.',
      'Integrated backend APIs, implemented user authentication, and managed database schemas.',
      'Collaborated with designers and backend engineers to deliver end-to-end feature releases.',
    ],
    startDate: 'May 2023',
    endDate: 'July 2025',
    technologies: [
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Prisma',
        href: 'https://prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
    ],
    website: '#',
    x: '#',
    linkedin: '#',
    github: '#',
  },
];
