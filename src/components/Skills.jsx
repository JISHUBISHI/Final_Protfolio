import { Code2, Cpu, Library, Database } from 'lucide-react';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">My Skills</div>
          <h2 className="section-title">Tools & Technologies</h2>
        </div>
        
        <div className="skills-categories">
          <div className="skill-category-card glass-card">
            <div className="skill-category-icon">
              <Code2 size={24} />
            </div>
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">MATLAB</span>
            </div>
          </div>
          
          <div className="skill-category-card glass-card">
            <div className="skill-category-icon">
              <Cpu size={24} />
            </div>
            <h3 className="skill-category-title">AI & Machine Learning</h3>
            <div className="skill-tags">
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Generative AI</span>
              <span className="tech-tag">Agentic AI</span>
              <span className="tech-tag">Deep Learning</span>
              <span className="tech-tag">NLP</span>
              <span className="tech-tag">LangChain</span>
              <span className="tech-tag">LLMs</span>
              <span className="tech-tag">Google Gemini API</span>
            </div>
          </div>
          
          <div className="skill-category-card glass-card">
            <div className="skill-category-icon">
              <Library size={24} />
            </div>
            <h3 className="skill-category-title">Libraries & Frameworks</h3>
            <div className="skill-tags">
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">Scikit-Learn</span>
              <span className="tech-tag">Matplotlib</span>
              <span className="tech-tag">Plotly</span>
              <span className="tech-tag">FastAPI</span>
            </div>
          </div>
          
          <div className="skill-category-card glass-card">
            <div className="skill-category-icon">
              <Database size={24} />
            </div>
            <h3 className="skill-category-title">Databases & Tools</h3>
            <div className="skill-tags">
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">FAISS</span>
              <span className="tech-tag">ChromaDB</span>
              <span className="tech-tag">Git & GitHub</span>
              <span className="tech-tag">VS Code</span>
              <span className="tech-tag">Automation</span>
              <span className="tech-tag">Stable Diffusion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
