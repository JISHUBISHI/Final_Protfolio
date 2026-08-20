import { Lightbulb, Brain, Cpu, Database, Code2, Layers } from 'lucide-react';

export default function Thoughts() {
  return (
    <section className="section" id="thoughts">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Insights</div>
          <h2 className="section-title">Thoughts & Philosophy</h2>
        </div>
        
        <div className="achievements-grid">
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Brain size={24} />
            </div>
            <h3 className="achievement-title">The Future is Agentic</h3>
            <p className="achievement-desc">
              I believe we are transitioning from static software to dynamic, agentic systems that can reason, plan, and act autonomously to solve complex human problems.
            </p>
          </div>
          
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Lightbulb size={24} />
            </div>
            <h3 className="achievement-title">Design Meets Logic</h3>
            <p className="achievement-desc">
              Even the most sophisticated machine learning backend falls short if the user experience is poorly designed. Bridging powerful AI with intuitive UI is the ultimate challenge.
            </p>
          </div>
          
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Cpu size={24} />
            </div>
            <h3 className="achievement-title">Continuous Adaptation</h3>
            <p className="achievement-desc">
              In a field that evolves almost weekly, adaptability is more critical than deep but static expertise. I thrive on rapid learning, iteration, and embracing new paradigms.
            </p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Database size={24} />
            </div>
            <h3 className="achievement-title">Data-Centric AI</h3>
            <p className="achievement-desc">
              High-quality, curated data often outperforms a slightly better algorithm. Prioritizing robust data pipelines and understanding the underlying data is the foundation of real-world ML.
            </p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Code2 size={24} />
            </div>
            <h3 className="achievement-title">Open Source Synergy</h3>
            <p className="achievement-desc">
              The open-source community is the backbone of modern tech. Sharing knowledge, building transparently, and utilizing open frameworks accelerates innovation for everyone.
            </p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Layers size={24} />
            </div>
            <h3 className="achievement-title">Simplicity Scales</h3>
            <p className="achievement-desc">
              Over-engineered systems are fundamentally fragile. Striving for architectural simplicity and clean code ensures that applications can scale gracefully and remain maintainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
