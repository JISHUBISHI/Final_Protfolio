import { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen, Clock3, X } from 'lucide-react';

const posts = [
  {
    category: 'Agentic AI',
    readTime: '4 min read',
    title: 'What makes an AI workflow genuinely useful?',
    excerpt: 'The best AI systems are more than a single prompt: they plan, use tools, verify their work, and keep people in control.',
    content: [
      ['A useful AI system has a job to do', 'The goal is not to add AI for its own sake. Start with a clear task, a reliable input, and an outcome that can be checked. That gives the model a practical role in the product instead of making it a novelty.'],
      ['From prompt to workflow', 'An agentic workflow breaks a complicated job into smaller steps: understand the request, plan an approach, use the right tool, and review the result. This makes the experience more dependable than a one-shot response.'],
      ['Keep humans in the loop', 'Automation should make decisions easier to review, not harder. Showing the plan, sources, or intermediate results gives users the confidence to guide the system when it matters.'],
    ],
  },
  {
    category: 'Engineering',
    readTime: '3 min read',
    title: 'Building projects that feel polished',
    excerpt: 'A strong product combines clear hierarchy, fast interactions, and details that help people understand what happens next.',
    content: [
      ['Make the first screen count', 'A visitor should quickly understand who the product is for, what it does, and what they can do next. Strong typography and intentional spacing make that message feel confident without adding noise.'],
      ['Motion should explain', 'Good animation has a purpose: it can direct attention, show that something changed, or make a transition feel continuous. Small, responsive movements often have more impact than decorative effects.'],
      ['Design for every screen', 'Professional interfaces adapt gracefully. Cards should stack, touch targets should remain comfortable, and visual details should never make important content harder to read on a smaller device.'],
    ],
  },
  {
    category: 'Machine Learning',
    readTime: '3 min read',
    title: 'Why data quality is a product decision',
    excerpt: 'Model quality starts long before training - with data that is relevant, understandable, and aligned to a real user need.',
    content: [
      ['Useful data starts with context', 'Before selecting a model, define what the data represents, how it was collected, and where it can fail. Context turns a dataset into a foundation for meaningful decisions.'],
      ['Measure the behavior you care about', 'A single accuracy number rarely tells the full story. The right evaluation checks performance on the situations users will actually encounter.'],
      ['Build feedback into the loop', 'The best ML products learn from how people use them. Clear feedback paths help reveal edge cases and guide the next improvement.'],
    ],
  },
];

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    if (!activePost) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setActivePost(null);
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [activePost]);

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><BookOpen size={14} /> Notes from the build</div>
          <h2 className="section-title">Ideas, systems, and craft.</h2>
          <p className="section-subtitle">Short reads on building useful AI products and thoughtful software experiences.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article className="blog-card glass-card" key={post.title}>
              <div className="blog-card-glow" aria-hidden="true" />
              <div className="blog-card-topline">
                <span className="blog-category">{post.category}</span>
                <span className="blog-read-time"><Clock3 size={14} /> {post.readTime}</span>
              </div>
              <div className="blog-index">0{index + 1}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="blog-read-button" onClick={() => setActivePost(post)}>
                Read article <ArrowUpRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </div>

      {activePost && (
        <div className="blog-modal-overlay" role="presentation" onMouseDown={() => setActivePost(null)}>
          <article className="blog-modal-container" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="blog-modal-header">
              <span className="blog-category">{activePost.category}</span>
              <button className="blog-modal-close" onClick={() => setActivePost(null)} aria-label="Close article"><X size={19} /></button>
            </div>
            <div className="blog-modal-article-header">
              <h2 className="blog-modal-title" id="blog-modal-title">{activePost.title}</h2>
              <div className="blog-modal-meta"><Clock3 size={15} /> {activePost.readTime} <span className="blog-modal-meta-dot">•</span> Agnik Bishi</div>
            </div>
            <div className="blog-modal-content">
              {activePost.content.map(([heading, paragraph]) => (
                <section className="blog-modal-body" key={heading}>
                  <h3 className="blog-modal-h3">{heading}</h3>
                  <p className="blog-modal-p">{paragraph}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
