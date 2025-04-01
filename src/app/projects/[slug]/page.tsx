import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import styles from './ProjectPage.module.css';
import { Metadata, ResolvingMetadata } from 'next';

// This would typically come from a database or CMS
type Project = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // Optional video URL for hover preview
  link: string;
  technologies: string[];
  longDescription: string;
  githubLink?: string;
  projectType: 'freelance' | 'personal';
};

const projects: Project[] = [
  {
    slug: 'form-response',
    title: 'Form Response',
    description: 'A form response system built for college students to facilitate mock interviews and feedback collection.',
    imageUrl: '/images/FormResponse.png',
    link: 'https://formresponse.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebHooks', 'Google OAuth'],
    longDescription: `Form Response is a comprehensive form management system designed specifically for college students to streamline the mock interview process and feedback collection.

Key Features:
• Real-time form submissions for interview feedback
• Advanced analytics dashboard for tracking progress
• Custom form builder for different interview types
• User authentication for secure access
• Data export capabilities for analysis
• Mobile-responsive design for easy access

Project Context:
• Developed as a volunteer project for college students
• Used for mock interview practice sessions
• Facilitates structured feedback collection
• Helps students track their interview preparation progress`,
    githubLink: 'https://github.com/yourusername/form-response',
    projectType: 'freelance'
  },
  {
    slug: 'inventory-manager',
    title: 'Inventory Manager',
    description: 'A comprehensive inventory management system for tracking and managing stock levels.',
    imageUrl: '/images/inventory-manager.png',
    link: 'https://inventory-manager.vercel.app/',
    technologies: ['React', 'Node.js', 'MySql', 'Express'],
    longDescription: `A comprehensive inventory management system designed for tracking and managing stock levels.

Key Features:
• Real-time inventory tracking
• Stock level monitoring
• User authentication
• Data export capabilities
• Mobile-responsive design`,
    projectType: 'freelance'
  },
  {
    slug: 'bro-lifts',
    title: 'Bro Lifts',
    description: 'A comprehensive lifting tracker app with workout planning, progress tracking, and exercise library.',
    imageUrl: '/images/BroLifts.png',
    link: 'https://brolifts.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'PostGresSql'],
    longDescription: `A comprehensive fitness tracking application designed for weightlifters and fitness enthusiasts.

Key Features:
• Workout planning and scheduling
• Progress tracking with charts
• Exercise library with form guides
• Personal records tracking
• Social sharing capabilities`,
    projectType: 'personal'
  },
  {
    slug: 'gorilla-type',
    title: 'Gorilla Type',
    description: 'A modern typing speed test application with real-time feedback and performance analytics.',
    imageUrl: '/images/GorillaType.png',
    link: 'https://gorillatype.vercel.app/',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS'],
    longDescription: `A modern typing speed test application with real-time feedback and performance analytics.

Key Features:
• Real-time typing speed calculation
• Performance analytics
• Multiple difficulty levels
• Custom text options
• Progress tracking`,
    projectType: 'personal'
  },
  {
    slug: 'poker-bot',
    title: 'Poker Bot Game',
    description: 'An AI-powered poker bot game featuring machine learning algorithms for decision making.',
    imageUrl: '/images/PokerBot.png',
    link: 'https://pokerbotgame.vercel.app/',
    technologies: ['Next.js', 'Python'],
    longDescription: `An AI-powered poker game that demonstrates machine learning in action.

Key Features:
• AI-powered opponent
• Real-time gameplay
• Multiple difficulty levels
• Performance tracking
• Interactive interface`,
    projectType: 'personal'
  },
  {
    slug: 'fun-facts',
    title: 'Fun Facts Chrome Extension',
    description: 'A Chrome extension that displays random fun facts to make browsing more educational and entertaining.',
    imageUrl: '/images/FunFactExtension.png',
    link: 'https://chromewebstore.google.com/detail/funfacts/cdnjflidkjoeocfeeibkddfldmhkohie?pli=1',
    technologies: ['JavaScript', 'Golang Rest API', 'Google Tools'],
    longDescription: `A Chrome extension that displays random fun facts to make browsing more educational and entertaining.

Key Features:
• Random fun fact generation
• Educational content
• Easy-to-use interface
• Regular content updates
• Browser integration`,
    projectType: 'personal'
  },
  {
    slug: 'macro-counter',
    title: 'Macro Counter',
    description: 'A nutrition tracking application for counting macros and managing dietary goals.',
    imageUrl: '/images/macro-counter.png',
    link: 'https://macro-counter.vercel.app/',
    technologies: ['React', 'TypeScript', 'MongoDB', 'AI prompting', 'FireBase', 'Tailwind CSS'],
    longDescription: `A nutrition tracking application for counting macros and managing dietary goals.

Key Features:
• Macro nutrient tracking
• AI-powered meal suggestions
• Progress monitoring
• Custom goal setting
• Data visualization`,
    projectType: 'personal'
  }
];

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${project.title} | Edward's Portfolio`,
    description: project.description,
    keywords: [
      ...project.technologies,
      'portfolio',
      'web development',
      'software engineer',
      project.projectType,
      project.title.toLowerCase(),
    ],
    openGraph: {
      title: `${project.title} | Edward's Portfolio`,
      description: project.description,
      images: [project.imageUrl, ...previousImages],
      type: 'website',
      url: `https://portfolio.edward.com/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Edward's Portfolio`,
      description: project.description,
      images: [project.imageUrl],
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
      canonical: `https://portfolio.edward.com/projects/${project.slug}`,
    },
  }
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="max-w-5xl mx-auto py-12 px-6">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400">The project you&apos;re looking for doesn&apos;t exist.</p>
        </main>
      </div>
    );
  }

  // Split the long description into paragraphs and bullet points
  const descriptionParts = project.longDescription.split('\n\n');
  const mainDescription = descriptionParts[0];
  const bulletPoints = descriptionParts.slice(1).join('\n\n').split('\n').filter(line => line.trim().startsWith('•'));

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="relative z-10 mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className={styles.projectHeader}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm ${
              project.projectType === 'freelance' 
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}>
              {project.projectType === 'freelance' ? 'Freelance' : 'Personal'}
            </span>
          </div>
          <p className="text-xl text-gray-300 mb-8">{project.description}</p>
        </div>

        <div className={`${styles.projectImage} group relative overflow-hidden rounded-xl`}>
          <div className="relative w-full h-full">
            <Image 
              src={project.imageUrl} 
              alt={project.title}
              width={1200}
              height={675}
              className="w-full rounded-xl shadow-2xl transition-all duration-150"
              priority
            />
            {/* Permanent video indicator */}
            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm text-white/90">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Hover to preview</span>
            </div>
            {/* Video placeholder overlay */}
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex flex-col items-center justify-center">
              <div className="p-4 text-center">
                <svg 
                  className="w-12 h-12 text-white/90 mb-2 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-white/90 text-lg font-medium">Demo Video</p>
                <p className="text-white/70 text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.technologies}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.description}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Project Details</h2>
            <div className="prose prose-invert">
              <p className="mb-6 text-gray-300">{mainDescription}</p>
              {bulletPoints.length > 0 && (
                <ul>
                  {bulletPoints.map((point, index) => (
                    <li key={index}>{point.replace('•', '').trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={styles.links}>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/20"
              >
                View Live Project
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg hover:shadow-gray-500/20"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 