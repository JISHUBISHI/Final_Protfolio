import { useState, useEffect } from 'react';
import { Mail, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const roles = ['Software Engineer', 'ML & AI Engineer', 'Agentic AI Builder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="orb orb-purple" style={{ width: '600px', height: '600px', top: '-10%', left: '-10%' }}></div>
      <div className="orb orb-cyan" style={{ width: '500px', height: '500px', bottom: '10%', right: '-5%' }}></div>
      
      <div className="container hero-two-col page-enter page-enter-active">
        <div className="hero-content">
          <div className="hero-kicker"><span className="hero-kicker-dot" /> Available for opportunities</div>
          <h1 className="hero-name">Agnik <span>Bishi</span></h1>
          <h2 className="hero-title">Building <span>scalable AI-driven applications</span></h2>
          
          <div className="hero-typed-line">
            <span className="hero-typed-label">I am a</span>
            <span className="hero-typed-text">{roles[roleIndex]}</span>
            <span className="hero-typed-cursor">|</span>
          </div>
          
          <p className="hero-tagline">
            I build machine-learning, generative-AI, and agentic systems, from intelligent applications to automated development pipelines.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="assets/Agnik_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download Resume</a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/JISHUBISHI" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:agnikbishi28@gmail.com"><Mail size={20} /></a>
            <a href="assets/Agnik_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume"><FileText size={20} /></a>
          </div>
        </div>
        
        <div className="hero-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <img src="assets/profile.jpg" alt="Agnik Bishi" className="hero-profile-img" style={{ width: '370px', height: '370px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-glow)', zIndex: 1, position: 'relative' }} />
          <div className="glow-dot" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 2, width: '15px', height: '15px' }}></div>
          <div className="glow-dot" style={{ position: 'absolute', bottom: '40px', left: '20px', zIndex: 2, width: '10px', height: '10px' }}></div>
          
          <div className="hero-badge-float" style={{ position: 'absolute', top: '15%', right: '0', transform: 'translateX(60%)', background: '#0a0d14', border: '1px solid #1f3b5e', padding: '12px 18px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '14px', zIndex: 10, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)', minWidth: 'max-content', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '26px' }}>🤖</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#fff', marginBottom: '2px' }}>AI/ML Engineer</div>
              <div style={{ fontSize: '12px', color: '#8a94a6', fontWeight: '500' }}>GenAI • Agents • LLMs</div>
            </div>
          </div>
          
          <div className="hero-badge-float" style={{ position: 'absolute', bottom: '15%', left: '0', transform: 'translateX(-60%)', background: '#0a0d14', border: '1px solid #1f3b5e', padding: '12px 18px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '14px', zIndex: 10, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)', minWidth: 'max-content', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '26px' }}>🏆</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#fff', marginBottom: '2px' }}>200+ Problems</div>
              <div style={{ fontSize: '12px', color: '#8a94a6', fontWeight: '500' }}>LeetCode Solved</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-hint">
        Scroll
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
