'use client';

interface ProjectLinkProps {
  href: string;
  isDisabled?: boolean;
  className?: string;
}

export default function ProjectLink({ href, isDisabled, className }: ProjectLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
    }
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {isDisabled ? 'Project Disabled (API Costs)' : 'View Live Project'}
    </a>
  );
} 