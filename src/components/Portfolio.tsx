import React from 'react';
import './Portfolio.css';

interface PortfolioProps {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  location?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  name,
  title,
  email,
  phone,
  location,
  github,
  linkedin,
  website
}) => {
  // Sample data - in a real app, this would come from props or API
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com/example/taskapp"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with data visualization",
      technologies: ["React", "Chart.js", "Weather API", "CSS Grid"],
      liveUrl: "https://weather-example.com"
    }
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Webpack"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Jest", "CI/CD", "Agile"]
    }
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      startDate: "2022",
      endDate: "Present",
      location: "San Francisco, CA",
      description: [
        "Led development of customer-facing web applications using React and TypeScript",
        "Collaborated with UX/UI designers to implement responsive and accessible interfaces",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques"
      ]
    },
    {
      id: 2,
      company: "Digital Agency Co.",
      position: "Full Stack Developer",
      startDate: "2020",
      endDate: "2022",
      location: "Remote",
      description: [
        "Developed and maintained multiple client websites and web applications",
        "Built RESTful APIs using Node.js and Express",
        "Implemented automated testing and deployment pipelines",
        "Worked directly with clients to gather requirements and provide technical solutions"
      ]
    }
  ];

  return (
    <div className="portfolio">
      {/* Header/Hero Section */}
      <header className="portfolio-header">
        <div className="container">
          <div className="hero-content">
            <h1 className="name">{name}</h1>
            <h2 className="title">{title}</h2>
            <div className="contact-info">
              <span className="email">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
              {phone && <span className="phone">{phone}</span>}
              {location && <span className="location">{location}</span>}
            </div>
            <div className="social-links">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer" className="social-link">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a passionate full-stack developer with over 4 years of experience building 
            modern web applications. I love creating efficient, scalable solutions and 
            staying up-to-date with the latest technologies. When I'm not coding, you can 
            find me exploring new frameworks, contributing to open-source projects, or 
            hiking in nature.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h3>{skill.category}</h3>
                <div className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    {exp.location && <span className="location">• {exp.location}</span>}
                  </div>
                  <div className="date-range">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                {project.imageUrl && (
                  <div className="project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live-link"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="contact-text">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="contact-methods">
            <a href={`mailto:${email}`} className="contact-button">
              Send Email
            </a>
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-button secondary"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <p>&copy; 2025 {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
