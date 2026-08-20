export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Focused on practical intelligent software.</h2>
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="about-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Bridging the gap between complex AI and intuitive design.</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '800px' }}>
              I am an aspiring Software Engineer with a strong foundation in machine learning, generative AI, and agentic systems. I enjoy turning ambitious ideas into scalable, user-focused applications.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '800px' }}>
              From multi-agent development workflows to healthcare platforms and voice assistants, I focus on practical software that automates useful work and gives people better experiences.
            </p>
            
            <div className="about-stats" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '1rem' }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <div className="stat-value" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>200+</div>
                <div className="stat-label" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>LeetCode Problems</div>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <div className="stat-value" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>3</div>
                <div className="stat-label" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>Featured Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
