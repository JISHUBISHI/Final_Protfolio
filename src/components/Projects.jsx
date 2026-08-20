import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={() => handleFilter('all')}>All</button>
          <button className={`btn ${filter === 'ai' ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={() => handleFilter('ai')}>AI</button>
          <button className={`btn ${filter === 'ml' ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={() => handleFilter('ml')}>ML</button>
          <button className={`btn ${filter === 'web' ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={() => handleFilter('web')}>Web</button>
        </div>

        <div className="projects-grid">
          <article 
            className="project-card glass-card" 
            style={{ display: filter === 'all' || filter === 'ai' ? 'flex' : 'none' }}
          >
            <div className="project-number">01</div>
            <h3 className="project-title">AI Virtual Development Pod</h3>
            <p className="project-description">An AI system that converts user prompts into production-ready applications through an automated development pipeline.</p>
            <ul className="project-highlights">
              <li>Design, coding, and testing agents</li>
              <li>Automated prompt-to-report workflow</li>
              <li>Production-ready application output</li>
            </ul>
            <div className="project-tags">
              <span className="tech-tag">Agentic AI</span>
              <span className="tech-tag">Python</span>
            </div>
            <div className="project-actions">
              <a href="https://huggingface.co/spaces/Agnik28/AI_VIRTUAL_POD" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo</a>
              <a href="https://huggingface.co/spaces/Agnik28/AI_VIRTUAL_POD/tree/main" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer"><Github size={16} /> Code</a>
            </div>
          </article>

          <article 
            className="project-card glass-card" 
            style={{ display: filter === 'all' || filter === 'ai' ? 'flex' : 'none' }}
          >
            <div className="project-number">02</div>
            <h3 className="project-title">Healthbuddy AI Platform</h3>
            <p className="project-description">A full-stack AI healthcare platform offering evidence-based symptom analysis and personalized guidance.</p>
            <ul className="project-highlights">
              <li>Personalized guidance</li>
              <li>Specialized LLM agents</li>
              <li>Real-time search APIs</li>
            </ul>
            <div className="project-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">LLM</span>
              <span className="tech-tag">APIs</span>
            </div>
            <div className="project-actions">
              <a href="https://healthbuddy2.onrender.com/" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo</a>
              <a href="https://github.com/JISHUBISHI/HealthBuddy" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer"><Github size={16} /> Code</a>
            </div>
          </article>

          <article 
            className="project-card glass-card" 
            style={{ display: filter === 'all' || filter === 'web' ? 'flex' : 'none' }}
          >
            <div className="project-number">03</div>
            <h3 className="project-title">AI-Powered Melody Voice Assistant</h3>
            <p className="project-description">A voice-driven automation assistant built collaboratively to execute system tasks and provide AI-powered user help.</p>
            <ul className="project-highlights">
              <li>Voice-driven system-task automation</li>
              <li>AI-powered user assistance</li>
              <li>Built in a three-person team</li>
            </ul>
            <div className="project-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Automation</span>
            </div>
            <div className="project-actions">
              <span className="btn btn-secondary btn-sm" aria-label="Project details available on request"><Github size={16} /> Project details on request</span>
            </div>
          </article>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a 
            href="https://github.com/JISHUBISHI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Github size={20} />
            View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
