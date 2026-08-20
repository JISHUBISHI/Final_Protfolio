import { Mail, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Connect</div>
          <h2 className="section-title">Let's build something intelligent.</h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>Have a project in mind or just want to say hi? Send me a message directly!</p>
            
            <div className="contact-links">
              <a href="mailto:agnikbishi28@gmail.com" className="contact-link">
                <div className="contact-link-icon">
                  <Mail size={18} />
                </div>
                agnikbishi28@gmail.com
              </a>
              <a href="https://github.com/JISHUBISHI" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <Github size={18} />
                </div>
                GitHub Profile
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <Linkedin size={18} />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <form className="contact-form glass-card" action="https://formsubmit.co/agnikbishi28@gmail.com" method="POST">
            <input type="hidden" name="_subject" defaultValue="New message from Portfolio" />
            <input type="hidden" name="_captcha" defaultValue="false" />
            
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-input" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-textarea" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
