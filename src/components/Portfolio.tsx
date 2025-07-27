import React from 'react';
import './Portfolio.css';

interface PortfolioProps {
  name: string;
  title: string;
  email: string;
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

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
  location?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  name,
  title,
  email,
  location,
  github,
  linkedin,
  website
}) => {
  // Sample data - in a real app, this would come from props or API
  const projects: Project[] = [
    {
      id: 1,
      title: "Customer Payment Application",
      description: "Enterprise payment processing system built with React frontend and Java backend for major consulting client",
      technologies: ["React", "Java", "Spring Framework", "REST APIs", "Security"],
      githubUrl: "https://github.com/coding2themax/payment-system"
    },
    {
      id: 2,
      title: "RabbitMQ Service Broker",
      description: "Open Service Broker implementation using Spring Cloud framework to enable secure RabbitMQ connectivity without admin access",
      technologies: ["Java", "Spring Cloud", "RabbitMQ", "Kubernetes", "Helm"],
      githubUrl: "https://github.com/coding2themax/rabbitmq-broker"
    },
    {
      id: 3,
      title: "GitOps CI/CD Pipeline",
      description: "Automated deployment pipeline with GitLab runners, container scanning, and Kubernetes deployment using Helm charts",
      technologies: ["GitLab CI/CD", "Docker", "Kubernetes", "Helm", "Security Scanning"],
      githubUrl: "https://github.com/coding2themax/gitops-pipeline"
    },
    {
      id: 4,
      title: "API Gateway Integration Platform",
      description: "Multi-vendor API gateway solution integrating IBM Service Registry, MuleSoft AnyPoint, and Kong with custom security layer",
      technologies: ["Java", "Spring Security", "Kong", "MuleSoft", "API Management"],
      githubUrl: "https://github.com/coding2themax/api-gateway-platform"
    },
    {
      id: 5,
      title: "Infrastructure Automation Suite",
      description: "Ansible and Puppet automation scripts for managing 2,000+ virtual machines with configuration management",
      technologies: ["Ansible", "Puppet", "Linux", "Configuration Management", "VM Automation"],
      githubUrl: "https://github.com/coding2themax/infrastructure-automation"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React TypeScript and Webpack showcasing professional experience",
      technologies: ["React", "TypeScript", "Webpack", "CSS3", "Responsive Design"],
      liveUrl: "https://maxquinones.dev",
      githubUrl: "https://github.com/coding2themax/portfolio-ui"
    }
  ];

  const skills: Skill[] = [
    {
      category: "Programming & Frameworks",
      items: ["Java", "Spring Framework", "JavaScript", "HTML", "React", "TypeScript", "Perl", "SQL", "Lawson 4GL"]
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Kubernetes", "Docker", "Helm", "Puppet", "Ansible", "CI/CD", "GitOps", "Maven", "Jenkins", "GitLab"]
    },
    {
      category: "Messaging & APIs",
      items: ["RabbitMQ", "REST APIs", "API Gateways", "Kong", "MuleSoft AnyPoint", "IBM Service Registry", "Spring Cloud"]
    },
    {
      category: "Testing & Quality",
      items: ["Test Driven Design", "JUnit", "Spring Test", "Unit Testing", "Integration Testing", "Performance Testing", "Security Scans"]
    },
    {
      category: "Cloud & Systems",
      items: ["Linux", "Public Cloud", "Containers", "TC Server", "Virtual Machines", "Configuration Management"]
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: "Arizona State University",
      degree: "Bachelor's Degree",
      field: "Computer Information Systems",
      year: "2008",
      location: "WP School Of Business"
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
            Passionate software engineer with 18+ years of experience in coding, 9+ years in Java, 
            Spring, SQL, REST API, and Kubernetes. Currently serving as Senior Consultant at Deloitte, 
            with previous leadership roles at State Farm Insurance where I led development teams and 
            implemented enterprise solutions. Based in Phoenix, AZ, I specialize in creating scalable 
            applications, implementing DevOps practices, and building cloud-native solutions. 
            I have extensive experience with containerization, API management, and mentoring development teams 
            while maintaining the highest engineering standards.
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

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-timeline">
            {education.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <div className="institution-info">
                    <span className="institution">{edu.institution}</span>
                    {edu.location && <span className="school-location">• {edu.location}</span>}
                  </div>
                  <div className="year">{edu.year}</div>
                </div>
                <div className="field-of-study">
                  <span className="field">{edu.field}</span>
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
