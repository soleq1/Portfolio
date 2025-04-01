// components/PortfolioItem.jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioItem.module.css';

interface PortfolioItemProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies?: string[];
    slug: string;
}

const PortfolioItem = ({ title, description, imageUrl, link, technologies, slug }: PortfolioItemProps) => {
    return (
        <div className={styles.card}>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className={styles.image}
                />
            ) : (
                <div className={styles.placeholder}>
                    No Preview Available
                </div>
            )}
            <div className={styles.content}>
                <Link href={`/projects/${slug}`} className={styles.titleLink}>
                    <h2 className={styles.title}>{title}</h2>
                </Link>
                <p className={styles.description}>{description}</p>
                {technologies && technologies.length > 0 && (
                    <div className={styles.technologies}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={styles.techTag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                {link && (
                    <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;