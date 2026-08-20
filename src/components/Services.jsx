import { Code, BrainCircuit, Network, Database, Bot, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Services</div>
          <h2 className="section-title">What I can build</h2>
        </div>
        
        <div className="achievements-grid">
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Code size={24} />
            </div>
            <h3 className="achievement-title">Software Development</h3>
            <p className="achievement-desc">Responsive websites, interactive experiences, and application interfaces with readable code.</p>
          </div>
          
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <BrainCircuit size={24} />
            </div>
            <h3 className="achievement-title">AI Engineering</h3>
            <p className="achievement-desc">Model-powered features, prompt workflows, automation logic, and agentic tool experiences.</p>
          </div>
          
          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Network size={24} />
            </div>
            <h3 className="achievement-title">Machine Learning</h3>
            <p className="achievement-desc">Data preparation, model thinking, evaluation flows, and useful prediction pipelines.</p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Bot size={24} />
            </div>
            <h3 className="achievement-title">LLM Integrations</h3>
            <p className="achievement-desc">Intelligent chatbots, LangChain agents, Google Gemini API integrations, and context-aware natural language interfaces.</p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Database size={24} />
            </div>
            <h3 className="achievement-title">Data Architectures</h3>
            <p className="achievement-desc">Vector databases, scalable storage structures, and robust pipelines to feed data into ML models.</p>
          </div>

          <div className="achievement-card glass-card">
            <div className="achievement-icon">
              <Sparkles size={24} />
            </div>
            <h3 className="achievement-title">Generative AI Apps</h3>
            <p className="achievement-desc">Custom tools leveraging stable diffusion, text generation, and innovative AI solutions to enhance creativity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
