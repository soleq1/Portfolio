import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import styles from './page.module.css';
import { Metadata } from 'next';

// Transparent 1x1 pixel PNG base64
const TRANSPARENT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8=';

export const metadata: Metadata = {
  title: "Edward's Portfolio | Full Stack Developer",
  description: 'Full Stack Developer specializing in modern web technologies, building innovative solutions with React, TypeScript, and more.',
  keywords: [
    'Full Stack Developer',
    'Web Development',
    'React',
    'TypeScript',
    'Next.js',
    'Software Engineer',
    'Portfolio',
    'JavaScript',
    'Node.js',
    'Frontend Developer',
    'Backend Developer',
  ],
  openGraph: {
    title: "Edward's Portfolio | Full Stack Developer",
    description: 'Full Stack Developer specializing in modern web technologies, building innovative solutions with React, TypeScript, and more.',
    url: 'https://portfolio.edward.com',
    siteName: "Edward's Portfolio",
    images: [
      {
        url: '/images/og-image.png', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Edward's Portfolio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Edward's Portfolio | Full Stack Developer",
    description: 'Full Stack Developer specializing in modern web technologies, building innovative solutions with React, TypeScript, and more.',
    images: ['/images/og-image.png'], // You'll need to add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://portfolio.edward.com',
  },
};

// This would typically come from a database or CMS
const projects = [
  {
    slug: 'form-response',
    title: 'Form Response',
    description: 'A form response system built for college students to facilitate mock interviews and feedback collection.',
    imageUrl: '/images/FormResponse.png',
    link: 'https://formresponse.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    projectType: 'freelance'
  },
  {
    slug: 'inventory-manager',
    title: 'Inventory Manager',
    description: 'A comprehensive inventory management system for tracking and managing stock levels.',
    imageUrl: TRANSPARENT_IMAGE,
    link: 'https://inventory-manager.vercel.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    projectType: 'freelance'
  },
  {
    slug: 'bro-lifts',
    title: 'Bro Lifts',
    description: 'A comprehensive lifting tracker app with workout planning, progress tracking, and exercise library.',
    imageUrl: '/images/BroLifts.png',
    link: 'https://brolifts.netlify.app/',
    technologies: ['React', 'Tailwind CSS'],
    projectType: 'personal'
  },
  {
    slug: 'gorilla-type',
    title: 'Gorilla Type',
    description: 'A modern typing speed test application with real-time feedback and performance analytics.',
    imageUrl: '/images/GorillaType.png',
    link: 'https://gorillatype.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    projectType: 'personal'
  },
  {
    slug: 'poker-bot',
    title: 'Poker Bot Game',
    description: 'An AI-powered poker bot game featuring machine learning algorithms for decision making.',
    imageUrl: '/images/PokerBot.png',
    link: 'https://pokerbotgame.vercel.app/',
    technologies: ['Python', 'TensorFlow'],
    projectType: 'personal'
  },
  {
    slug: 'fun-facts',
    title: 'Fun Facts Chrome Extension',
    description: 'A Chrome extension that displays random fun facts to make browsing more educational and entertaining.',
    imageUrl: '/images/FunFactExtension.png',
    link: 'https://chromewebstore.google.com/detail/funfacts/cdnjflidkjoeocfeeibkddfldmhkohie?pli=1',
    technologies: ['JavaScript'],
    projectType: 'personal'
  },
  {
    slug: 'macro-counter',
    title: 'Macro Counter',
    description: 'A nutrition tracking application for counting macros and managing dietary goals.',
    imageUrl: TRANSPARENT_IMAGE,
    link: 'https://macro-counter.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    projectType: 'personal'
  }
];

/* export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
}; */

export default function Home() {
  const freelanceProjects = projects.filter(p => p.projectType === 'freelance');
  const personalProjects = projects.filter(p => p.projectType === 'personal');

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Edward
          </h1>
          <p className="text-xl text-gray-300">
            Full Stack Developer specializing in modern web technologies
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-200 flex items-center">
            <span className="bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full text-sm mr-4">Freelance</span>
            Professional Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelanceProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-200 flex items-center">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm mr-4">Personal</span>
            Side Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
